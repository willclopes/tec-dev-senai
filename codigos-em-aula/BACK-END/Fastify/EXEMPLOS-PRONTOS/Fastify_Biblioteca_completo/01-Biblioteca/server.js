// BIBLIOTECA - TUDO EM UM ARQUIVO
// Mesma ideia do seu exemplo de tasks, agora com empréstimo.

import Fastify from 'fastify'
import { v4 } from 'uuid'

// Lista de livros de exemplo. Os IDs são textos ("1", "2"...).
// Isso facilita a comparação com o ID recebido pela URL.
let livros = [
    { id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true, emprestadoPara: null, dataEmprestimo: null },
    { id: '2', titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', disponivel: false, emprestadoPara: 'Maria', dataEmprestimo: '20/11/2026' },
    { id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado', disponivel: true, emprestadoPara: null, dataEmprestimo: null },
    { id: '4', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', disponivel: true, emprestadoPara: null, dataEmprestimo: null }
]

const app = Fastify({ logger: true })

// GET - Lista todos ou filtra por disponibilidade.
// Exemplo: /livros?disponivel=true
app.get('/livros', async (request, response) => {
    if (request.query.disponivel) {
        const filtrados = livros.filter(livro => String(livro.disponivel) === request.query.disponivel)
        return response.code(200).send(filtrados)
    }

    response.code(200).send(livros)
})

// GET - Busca um livro pelo ID.
app.get('/livros/:id', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) {
        return response.code(404).send({ erro: 'Livro não encontrado' })
    }

    response.code(200).send(livro)
})

// POST - Cadastra um livro novo.
// Envie somente titulo e autor no Body.
app.post('/livros', async (request, response) => {
    const novoLivro = {
        id: v4(),
        titulo: request.body.titulo,
        autor: request.body.autor,
        disponivel: true,
        emprestadoPara: null,
        dataEmprestimo: null
    }

    livros.push(novoLivro)
    response.code(201).send(novoLivro)
})

// PUT - Atualiza título e autor usando o ID enviado no Body.
app.put('/livros', async (request, response) => {
    const body = request.body
    const index = livros.findIndex(livro => livro.id === String(body.id))

    if (index === -1) {
        return response.code(404).send({ erro: 'Livro não encontrado' })
    }

    livros[index].titulo = body.titulo
    livros[index].autor = body.autor

    response.code(200).send(livros[index])
})

// DELETE - Exclui um livro disponível.
app.delete('/livros/:id', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) {
        return response.code(404).send({ erro: 'Livro não encontrado' })
    }

    if (!livro.disponivel) {
        return response.code(409).send({ erro: 'Devolva o livro antes de excluir' })
    }

    livros = livros.filter(livro => livro.id !== request.params.id)
    response.code(200).send(livros)
})

// PATCH - Registra o empréstimo.
// Body: { "pessoa": "Ana" }
app.patch('/livros/:id/emprestar', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) {
        return response.code(404).send({ erro: 'Livro não encontrado' })
    }

    if (!livro.disponivel) {
        return response.code(409).send({ erro: 'Livro já emprestado' })
    }

    if (!request.body || !request.body.pessoa) {
        return response.code(400).send({ erro: 'Informe a pessoa' })
    }

    livro.disponivel = false
    livro.emprestadoPara = request.body.pessoa
    livro.dataEmprestimo = new Date().toLocaleDateString('pt-BR')

    response.code(200).send(livro)
})

// PATCH - Registra a devolução. Não precisa de Body.
app.patch('/livros/:id/devolver', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) {
        return response.code(404).send({ erro: 'Livro não encontrado' })
    }

    if (livro.disponivel) {
        return response.code(409).send({ erro: 'Livro já está disponível' })
    }

    livro.disponivel = true
    livro.emprestadoPara = null
    livro.dataEmprestimo = null

    response.code(200).send(livro)
})

// Inicia o servidor.
app.listen({ port: 3004, host: '127.0.0.1' }, (erro, endereco) => {
    if (erro) {
        app.log.error(erro)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${endereco}`)
})
