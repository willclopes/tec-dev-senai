// CONTROLLER: recebe as requisições e envia respostas.
import { getAll, getById, cadastrar, editar, excluir, alterar } from '../services/crud-services.js'

export async function listar(request, response) {
    response.code(200).send(await getAll())
}

export async function consultar(request, response) {
    const registro = await getById(request.params.id)
    if (!registro) return response.code(404).send({ erro: 'Não encontrado' })
    response.code(200).send(registro)
}

export async function criar(request, response) {
    response.code(201).send(await cadastrar(request.body))
}

export async function atualizar(request, response) {
    const registro = await editar(request.body)
    if (!registro) return response.code(404).send({ erro: 'Não encontrado' })
    response.code(200).send(registro)
}

export async function remover(request, response) {
    response.code(200).send(await excluir(request.params.id))
}

export async function atualizarParte(request, response) {
    const registro = await alterar(request.params.id, request.body)
    if (!registro) return response.code(404).send({ erro: 'Não encontrado' })
    response.code(200).send(registro)
}
