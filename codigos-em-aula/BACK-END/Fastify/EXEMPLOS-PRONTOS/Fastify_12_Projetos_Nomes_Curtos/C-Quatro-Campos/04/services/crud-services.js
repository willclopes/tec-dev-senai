// Service: faz tudo diretamente na lista, sem Repository.
import { v4 } from 'uuid'
import { banco } from '../database/connection.js'

export function listarRegistros() {
    return banco.registros
}

export function buscarRegistro(id) {
    return banco.registros.find(item => item.id === id)
}

export function filtrarRegistros(campo, valor) {
    return banco.registros.filter(item => String(item[campo]) === valor)
}

export function cadastrarRegistro(body) {
    const novo = { ...body, id: v4() }
    banco.registros.push(novo)
    return novo
}

export function editarRegistro(body) {
    const index = banco.registros.findIndex(item => item.id === body.id)
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body }
    return banco.registros[index]
}

export function alterarRegistro(id, body) {
    const index = banco.registros.findIndex(item => item.id === id)
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body, id: id }
    return banco.registros[index]
}

export function excluirRegistro(id) {
    const item = buscarRegistro(id)
    if (!item) return null
    banco.registros = banco.registros.filter(registro => registro.id !== id)
    return item
}
