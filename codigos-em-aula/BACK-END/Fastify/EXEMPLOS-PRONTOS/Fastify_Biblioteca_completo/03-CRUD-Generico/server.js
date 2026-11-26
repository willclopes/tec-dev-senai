// CRUD GENÉRICO - TUDO EM UM ARQUIVO
// Troque o nome do recurso e a lista de exemplos para outro projeto.
import Fastify from 'fastify'
import { v4 } from 'uuid'

const recurso = 'livros' // Poderia ser 'tarefas', 'equipamentos', etc.
let registros = [
    { id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true, emprestadoPara: null, dataEmprestimo: null },
    { id: '2', titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', disponivel: false, emprestadoPara: 'Maria', dataEmprestimo: '20/11/2026' },
    { id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado', disponivel: true, emprestadoPara: null, dataEmprestimo: null },
    { id: '4', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', disponivel: true, emprestadoPara: null, dataEmprestimo: null }
]

const app = Fastify({ logger: true })

// GET - Lista todos.
app.get('/' + recurso, async (request, response) => {
    response.code(200).send(registros)
})

// GET - Busca um registro pelo ID.
app.get('/' + recurso + '/:id', async (request, response) => {
    const registro = registros.find(item => item.id === request.params.id)
    if (!registro) return response.code(404).send({ erro: 'Não encontrado' })
    response.code(200).send(registro)
})

// POST - Cadastra com os campos enviados no Body.
app.post('/' + recurso, async (request, response) => {
    const novo = { ...request.body, id: v4() }
    registros.push(novo)
    response.code(201).send(novo)
})

// PUT - Atualiza o registro pelo ID que veio no Body.
app.put('/' + recurso, async (request, response) => {
    const body = request.body
    const index = registros.findIndex(item => item.id === String(body.id))
    if (index === -1) return response.code(404).send({ erro: 'Não encontrado' })

    registros[index] = { ...registros[index], ...body, id: registros[index].id }
    response.code(200).send(registros[index])
})

// DELETE - Remove um registro.
app.delete('/' + recurso + '/:id', async (request, response) => {
    registros = registros.filter(item => item.id !== request.params.id)
    response.code(200).send(registros)
})

// PATCH - Altera apenas os campos enviados no Body.
// Exemplo: { "disponivel": false }
app.patch('/' + recurso + '/:id', async (request, response) => {
    const index = registros.findIndex(item => item.id === request.params.id)
    if (index === -1) return response.code(404).send({ erro: 'Não encontrado' })

    registros[index] = { ...registros[index], ...request.body, id: registros[index].id }
    response.code(200).send(registros[index])
})

app.listen({ port: 3006, host: '127.0.0.1' }, (erro, endereco) => {
    if (erro) {
        app.log.error(erro)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${endereco}`)
})
