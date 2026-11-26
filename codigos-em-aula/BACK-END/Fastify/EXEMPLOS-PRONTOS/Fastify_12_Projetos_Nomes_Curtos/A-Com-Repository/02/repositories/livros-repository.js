// Repository: mexe diretamente na lista de livros.
import { banco } from '../database/connection.js'

export function pegarTodos() {
    return banco.livros
}

export function pegarPorId(id) {
    return banco.livros.find(livro => livro.id === id)
}

export function adicionar(livro) {
    banco.livros.push(livro)
    return livro
}

export function atualizar(body) {
    const index = banco.livros.findIndex(livro => livro.id === body.id)
    if (index === -1) return null
    banco.livros[index] = { ...banco.livros[index], titulo: body.titulo, autor: body.autor }
    return banco.livros[index]
}

export function remover(id) {
    const livro = pegarPorId(id)
    if (!livro) return null
    banco.livros = banco.livros.filter(item => item.id !== id)
    return livro
}

export function mudar(id) {
    const livro = pegarPorId(id)
    if (!livro) return null
    livro.disponivel = !livro.disponivel
    return livro
}
