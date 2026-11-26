// ROUTES: define os caminhos da nossa API.
import {
    listarLivros, consultarLivro, cadastrarLivro, editarLivro,
    excluirLivro, registrarEmprestimo, registrarDevolucao
} from '../controller/livros-controller.js'

export async function livrosRoutes(app) {
    app.get('/livros', listarLivros)
    app.get('/livros/:id', consultarLivro)
    app.post('/livros', cadastrarLivro)
    app.put('/livros', editarLivro)
    app.delete('/livros/:id', excluirLivro)
    app.patch('/livros/:id/emprestar', registrarEmprestimo)
    app.patch('/livros/:id/devolver', registrarDevolucao)
}
