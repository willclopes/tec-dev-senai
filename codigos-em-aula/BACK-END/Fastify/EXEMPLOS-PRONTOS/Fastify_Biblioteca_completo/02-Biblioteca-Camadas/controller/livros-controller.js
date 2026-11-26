// CONTROLLER: recebe as requisições e devolve as respostas.
import {
    getAllLivros, getLivroById, postLivro, putLivro,
    deleteLivro, emprestarLivro, devolverLivro
} from '../services/livros-services.js'

export async function listarLivros(request, response) {
    const livros = await getAllLivros(request.query.disponivel)
    response.code(200).send(livros)
}

export async function consultarLivro(request, response) {
    const livro = await getLivroById(request.params.id)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send(livro)
}

export async function cadastrarLivro(request, response) {
    const livro = await postLivro(request.body)
    response.code(201).send(livro)
}

export async function editarLivro(request, response) {
    const livro = await putLivro(request.body)
    if (!livro) return response.code(404).send({ erro: 'Livro não encontrado' })
    response.code(200).send(livro)
}

export async function excluirLivro(request, response) {
    const resultado = await deleteLivro(request.params.id)
    if (resultado === 'nao-encontrado') return response.code(404).send({ erro: 'Livro não encontrado' })
    if (resultado === 'emprestado') return response.code(409).send({ erro: 'Devolva o livro antes de excluir' })
    response.code(200).send(resultado)
}

export async function registrarEmprestimo(request, response) {
    const pessoa = request.body ? request.body.pessoa : null
    const resultado = await emprestarLivro(request.params.id, pessoa)

    if (resultado === 'nao-encontrado') return response.code(404).send({ erro: 'Livro não encontrado' })
    if (resultado === 'emprestado') return response.code(409).send({ erro: 'Livro já emprestado' })
    if (resultado === 'sem-pessoa') return response.code(400).send({ erro: 'Informe a pessoa' })

    response.code(200).send(resultado)
}

export async function registrarDevolucao(request, response) {
    const resultado = await devolverLivro(request.params.id)
    if (resultado === 'nao-encontrado') return response.code(404).send({ erro: 'Livro não encontrado' })
    if (resultado === 'disponivel') return response.code(409).send({ erro: 'Livro já está disponível' })
    response.code(200).send(resultado)
}
