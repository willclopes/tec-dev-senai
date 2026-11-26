// Rotas genéricas: usam o nome definido em database/connection.js.
import { banco } from '../database/connection.js'
import { listar, buscar, filtrar, cadastrar, editar, alterar, excluir } from '../controller/crud-controller.js'

export async function crudRoutes(app) {
    const rota = '/' + banco.recurso

    app.get(rota, listar)
    app.get(rota + '/:id', buscar)
    app.get(rota + '-filtro', filtrar)
    app.post(rota, cadastrar)
    app.put(rota, editar)
    app.patch(rota + '/:id', alterar)
    app.delete(rota + '/:id', excluir)
}
