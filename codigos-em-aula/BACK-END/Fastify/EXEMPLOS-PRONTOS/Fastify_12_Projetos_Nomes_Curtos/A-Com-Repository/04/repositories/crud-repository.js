// Repository: mexe no array de registros.
import { banco } from '../database/connection.js'

export function pegarTodos() {
    return banco.registros
}

export function pegarPorId(id) {
    return banco.registros.find(item => item.id === id)
}

export function adicionar(item) {
    banco.registros.push(item)
    return item
}

export function atualizar(body) {
    const index = banco.registros.findIndex(item => item.id === body.id)
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body }
    return banco.registros[index]
}

export function alterar(id, body) {
    const index = banco.registros.findIndex(item => item.id === id)
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body, id: id }
    return banco.registros[index]
}

export function remover(id) {
    const item = pegarPorId(id)
    if (!item) return null
    banco.registros = banco.registros.filter(registro => registro.id !== id)
    return item
}
