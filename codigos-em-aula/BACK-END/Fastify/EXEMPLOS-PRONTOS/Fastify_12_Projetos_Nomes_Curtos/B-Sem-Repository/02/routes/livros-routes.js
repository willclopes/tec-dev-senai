// Rotas: definem os endereços da API.
import { listar, buscar, cadastrar, editar, excluir, emprestarOuDevolver } from '../controller/livros-controller.js'

export async function livrosRoutes(app) {
    app.get('/livros', listar)
    app.get('/livros/:id', buscar)
    app.post('/livros', cadastrar)
    app.put('/livros', editar)
    app.delete('/livros/:id', excluir)
    app.patch('/livros/:id', emprestarOuDevolver)
}
