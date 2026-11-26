// Service: operações genéricas. Os campos podem mudar.
import { v4 } from 'uuid'
import { pegarTodos, pegarPorId, adicionar, atualizar, alterar, remover } from '../repositories/crud-repository.js'

export function listarRegistros() {
    return pegarTodos()
}

export function buscarRegistro(id) {
    return pegarPorId(id)
}

export function filtrarRegistros(campo, valor) {
    return pegarTodos().filter(item => String(item[campo]) === valor)
}

export function cadastrarRegistro(body) {
    const novo = { ...body, id: v4() }
    return adicionar(novo)
}

export function editarRegistro(body) {
    return atualizar(body)
}

export function alterarRegistro(id, body) {
    return alterar(id, body)
}

export function excluirRegistro(id) {
    return remover(id)
}
