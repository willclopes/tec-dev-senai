// Service: liga as operações e cria o livro novo.
import { v4 } from 'uuid'
import { pegarTodos, pegarPorId, adicionar, atualizar, remover, mudar } from '../repositories/livros-repository.js'

export function listarLivros() {
    return pegarTodos()
}

export function buscarLivro(id) {
    return pegarPorId(id)
}

export function cadastrarLivro(body) {
    const livro = { id: v4(), titulo: body.titulo, autor: body.autor, disponivel: true }
    return adicionar(livro)
}

export function editarLivro(body) {
    return atualizar(body)
}

export function excluirLivro(id) {
    return remover(id)
}

export function mudarDisponibilidade(id) {
    return mudar(id)
}
