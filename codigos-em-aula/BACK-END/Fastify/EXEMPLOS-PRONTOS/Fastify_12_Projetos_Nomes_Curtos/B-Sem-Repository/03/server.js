// CRUD GENÉRICO - um arquivo para diferentes tipos de cadastro.
// Para trocar o assunto, mude recurso e registros logo abaixo.

import Fastify from 'fastify'
import { v4 } from 'uuid'

const recurso = 'livros'  // Exemplo: 'tarefas' ou 'equipamentos'.

let registros = [
    { id: '1', titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true },
    { id: '2', titulo: 'O Hobbit', autor: 'J. R. R. Tolkien', disponivel: false },
    { id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado', disponivel: true }
]

const app = Fastify({ logger: true })

// GET: lista tudo. Exemplo: GET /livros
app.get('/' + recurso, async (request, response) => {
    response.code(200).send(registros)
})

// GET: procura pelo ID. Exemplo: GET /livros/1
app.get('/' + recurso + '/:id', async (request, response) => {
    const item = registros.find(item => item.id === request.params.id)

    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })

    response.code(200).send(item)
})

// GET com filtro. Exemplo: /livros-filtro?campo=disponivel&valor=true
// item[campo] significa: acessar o campo indicado na URL.
app.get('/' + recurso + '-filtro', async (request, response) => {
    const campo = request.query.campo
    const valor = request.query.valor
    const resultado = registros.filter(item => String(item[campo]) === valor)

    response.code(200).send(resultado)
})

// POST: cria um cadastro novo. Os campos vêm do Body.
app.post('/' + recurso, async (request, response) => {
    const novo = { ...request.body, id: v4() }

    registros.push(novo)
    response.code(201).send(novo)
})

// PUT: atualiza o cadastro identificado pelo ID no Body.
app.put('/' + recurso, async (request, response) => {
    const body = request.body
    const index = registros.findIndex(item => item.id === body.id)

    if (index === -1) return response.code(404).send({ erro: 'Registro não encontrado' })

    registros[index] = { ...registros[index], ...body }
    response.code(200).send(registros[index])
})

// PATCH: altera somente os campos enviados no Body.
app.patch('/' + recurso + '/:id', async (request, response) => {
    const index = registros.findIndex(item => item.id === request.params.id)

    if (index === -1) return response.code(404).send({ erro: 'Registro não encontrado' })

    registros[index] = { ...registros[index], ...request.body, id: registros[index].id }
    response.code(200).send(registros[index])
})

// DELETE: exclui um cadastro.
app.delete('/' + recurso + '/:id', async (request, response) => {
    const item = registros.find(item => item.id === request.params.id)

    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })

    registros = registros.filter(item => item.id !== request.params.id)
    response.code(200).send(registros)
})

app.listen({ port: 3006, host: '127.0.0.1' }, (erro, endereco) => {
    if (erro) {
        app.log.error(erro)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${endereco}`)
})
