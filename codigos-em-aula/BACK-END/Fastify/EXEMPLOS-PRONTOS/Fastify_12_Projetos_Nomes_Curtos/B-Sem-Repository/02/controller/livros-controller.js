// Controller: recebe a requisição e envia a resposta.
import { listarLivros, buscarLivro, cadastrarLivro, editarLivro, excluirLivro, mudarDisponibilidade } from '../services/livros-services.js'

export async function listar(request, response) {
    let livros = listarLivros()

    if (request.query.disponivel) {
        livros = livros.filter(livro => String(livro.disponivel) === request.query.disponivel)
    }

    response.code(200).send(livros)
}

export async function buscar(request, response) {
    const livro = buscarLivro(request.params.id)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send(livro)
}

export async function cadastrar(request, response) {
    const livro = cadastrarLivro(request.body)
    response.code(201).send(livro)
}

export async function editar(request, response) {
    const livro = editarLivro(request.body)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send(livro)
}

export async function excluir(request, response) {
    const livro = excluirLivro(request.params.id)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send({ mensagem: 'Livro excluído' })
}

export async function emprestarOuDevolver(request, response) {
    const livro = mudarDisponibilidade(request.params.id)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send(livro)
}
