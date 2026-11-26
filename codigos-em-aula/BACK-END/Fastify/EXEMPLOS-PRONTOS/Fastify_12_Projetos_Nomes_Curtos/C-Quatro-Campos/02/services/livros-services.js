// Service: faz as operações diretamente no array, sem Repository.
import { v4 } from 'uuid'
import { banco } from '../database/connection.js'

export function listarLivros() {
    return banco.livros
}

export function buscarLivro(id) {
    return banco.livros.find(livro => livro.id === id)
}

export function cadastrarLivro(body) {
    const livro = { id: v4(), titulo: body.titulo, autor: body.autor, disponivel: true }
    banco.livros.push(livro)
    return livro
}

export function editarLivro(body) {
    const index = banco.livros.findIndex(livro => livro.id === body.id)
    if (index === -1) return null
    banco.livros[index] = { ...banco.livros[index], titulo: body.titulo, autor: body.autor }
    return banco.livros[index]
}

export function excluirLivro(id) {
    const livro = buscarLivro(id)
    if (!livro) return null
    banco.livros = banco.livros.filter(item => item.id !== id)
    return livro
}

export function mudarDisponibilidade(id) {
    const livro = buscarLivro(id)
    if (!livro) return null
    livro.disponivel = !livro.disponivel
    return livro
}
