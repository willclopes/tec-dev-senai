// APP: cria o Fastify e registra as rotas genéricas.
import Fastify from 'fastify'
import { crudRoutes } from './routes/crud-routes.js'

export const app = Fastify({ logger: true })
app.register(crudRoutes)
