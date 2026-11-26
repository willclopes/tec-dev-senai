// ROUTES: cria os mesmos caminhos para qualquer cadastro.
import { banco } from '../database/connection.js'
import { listar, consultar, criar, atualizar, remover, atualizarParte } from '../controller/crud-controller.js'

export async function crudRoutes(app) {
    const caminho = '/' + banco.recurso

    app.get(caminho, listar)
    app.get(caminho + '/:id', consultar)
    app.post(caminho, criar)
    app.put(caminho, atualizar)
    app.delete(caminho + '/:id', remover)
    app.patch(caminho + '/:id', atualizarParte)
}
