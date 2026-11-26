// Controller: recebe as requisições e responde ao usuário.
import { listarRegistros, buscarRegistro, filtrarRegistros, cadastrarRegistro, editarRegistro, alterarRegistro, excluirRegistro } from '../services/crud-services.js'

export async function listar(request, response) {
    response.code(200).send(listarRegistros())
}

export async function buscar(request, response) {
    const item = buscarRegistro(request.params.id)
    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })
    response.code(200).send(item)
}

export async function filtrar(request, response) {
    const resultado = filtrarRegistros(request.query.campo, request.query.valor)
    response.code(200).send(resultado)
}

export async function cadastrar(request, response) {
    const item = cadastrarRegistro(request.body)
    response.code(201).send(item)
}

export async function editar(request, response) {
    const item = editarRegistro(request.body)
    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })
    response.code(200).send(item)
}

export async function alterar(request, response) {
    const item = alterarRegistro(request.params.id, request.body)
    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })
    response.code(200).send(item)
}

export async function excluir(request, response) {
    const item = excluirRegistro(request.params.id)
    if (!item) return response.code(404).send({ erro: 'Registro não encontrado' })
    response.code(200).send({ mensagem: 'Registro excluído' })
}
