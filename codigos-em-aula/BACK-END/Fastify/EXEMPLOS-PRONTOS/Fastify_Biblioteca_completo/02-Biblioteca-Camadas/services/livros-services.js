// SERVICES: trabalha com a lista e faz as regras da biblioteca.
import { v4 } from 'uuid'
import { banco } from '../database/connection.js'

export async function getAllLivros(disponivel) {
    if (disponivel) {
        return banco.livros.filter(livro => String(livro.disponivel) === disponivel)
    }
    return banco.livros
}

export async function getLivroById(id) {
    return banco.livros.find(livro => livro.id === id)
}

export async function postLivro(body) {
    const novoLivro = {
        id: v4(),
        titulo: body.titulo,
        autor: body.autor,
        disponivel: true,
        emprestadoPara: null,
        dataEmprestimo: null
    }

    banco.livros.push(novoLivro)
    return novoLivro
}

export async function putLivro(body) {
    const index = banco.livros.findIndex(livro => livro.id === String(body.id))
    if (index === -1) return null

    banco.livros[index].titulo = body.titulo
    banco.livros[index].autor = body.autor
    return banco.livros[index]
}

export async function deleteLivro(id) {
    const livro = banco.livros.find(livro => livro.id === id)
    if (!livro) return 'nao-encontrado'
    if (!livro.disponivel) return 'emprestado'

    banco.livros = banco.livros.filter(livro => livro.id !== id)
    return banco.livros
}

export async function emprestarLivro(id, pessoa) {
    const livro = banco.livros.find(livro => livro.id === id)
    if (!livro) return 'nao-encontrado'
    if (!livro.disponivel) return 'emprestado'
    if (!pessoa) return 'sem-pessoa'

    livro.disponivel = false
    livro.emprestadoPara = pessoa
    livro.dataEmprestimo = new Date().toLocaleDateString('pt-BR')
    return livro
}

export async function devolverLivro(id) {
    const livro = banco.livros.find(livro => livro.id === id)
    if (!livro) return 'nao-encontrado'
    if (livro.disponivel) return 'disponivel'

    livro.disponivel = true
    livro.emprestadoPara = null
    livro.dataEmprestimo = null
    return livro
}
