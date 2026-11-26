// Cria o Fastify e adiciona as rotas.
import Fastify from 'fastify'
import { crudRoutes } from './routes/crud-routes.js'

export const app = Fastify({ logger: true })
app.register(crudRoutes)
