// SERVICES: operações com os dados, sem regras específicas de livros.
import { v4 } from 'uuid'
import { banco } from '../database/connection.js'

export async function getAll() {
    return banco.registros
}

export async function getById(id) {
    return banco.registros.find(item => item.id === id)
}

export async function cadastrar(body) {
    const novo = { ...body, id: v4() }
    banco.registros.push(novo)
    return novo
}

export async function editar(body) {
    const index = banco.registros.findIndex(item => item.id === String(body.id))
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body, id: banco.registros[index].id }
    return banco.registros[index]
}

export async function excluir(id) {
    banco.registros = banco.registros.filter(item => item.id !== id)
    return banco.registros
}

export async function alterar(id, body) {
    const index = banco.registros.findIndex(item => item.id === id)
    if (index === -1) return null
    banco.registros[index] = { ...banco.registros[index], ...body, id: banco.registros[index].id }
    return banco.registros[index]
}
