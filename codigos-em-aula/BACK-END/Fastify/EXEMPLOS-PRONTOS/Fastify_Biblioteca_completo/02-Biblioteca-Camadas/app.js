// APP: cria o Fastify e registra as rotas.
import Fastify from 'fastify'
import { livrosRoutes } from './routes/livros-routes.js'

export const app = Fastify({ logger: true })
app.register(livrosRoutes)
