// BIBLIOTECA - tudo dentro de um único arquivo.
// Cada livro tem somente: id, titulo, autor e disponivel.

import Fastify from 'fastify'
import { v4 } from 'uuid'

// Livros de exemplo. Os IDs são textos, como os parâmetros da URL.
let livros = [
    { id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true },
    { id: '2', titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', disponivel: false },
    { id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado', disponivel: true }
]

const app = Fastify({ logger: true })

// GET: todos os livros ou filtro: /livros?disponivel=true
app.get('/livros', async (request, response) => {
    if (request.query.disponivel) {
        const resultado = livros.filter(livro => String(livro.disponivel) === request.query.disponivel)
        return response.code(200).send(resultado)
    }

    response.code(200).send(livros)
})

// GET BY ID: procura o livro informado na URL.
app.get('/livros/:id', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })

    response.code(200).send(livro)
})

// POST: cadastra um livro e cria o ID automaticamente.
app.post('/livros', async (request, response) => {
    const novoLivro = {
        id: v4(),
        titulo: request.body.titulo,
        autor: request.body.autor,
        disponivel: true
    }

    livros.push(novoLivro)
    response.code(201).send(novoLivro)
})

// PUT: edita título e autor. O ID vem no Body.
app.put('/livros', async (request, response) => {
    const body = request.body
    const index = livros.findIndex(livro => livro.id === body.id)

    if (index === -1) return response.code(404).send({ erro: 'Livro não encontrado' })

    livros[index] = { ...livros[index], titulo: body.titulo, autor: body.autor }
    response.code(200).send(livros[index])
})

// PATCH: alterna disponível/emprestado sem precisar de Body.
app.patch('/livros/:id', async (request, response) => {
    const index = livros.findIndex(livro => livro.id === request.params.id)

    if (index === -1) return response.code(404).send({ erro: 'Livro não encontrado' })

    livros[index].disponivel = !livros[index].disponivel
    response.code(200).send(livros[index])
})

// DELETE: exclui o livro informado na URL.
app.delete('/livros/:id', async (request, response) => {
    const livro = livros.find(livro => livro.id === request.params.id)

    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })

    livros = livros.filter(livro => livro.id !== request.params.id)
    response.code(200).send(livros)
})

// Liga o servidor.
app.listen({ port: 3004, host: '127.0.0.1' }, (erro, endereco) => {
    if (erro) {
        app.log.error(erro)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${endereco}`)
})
