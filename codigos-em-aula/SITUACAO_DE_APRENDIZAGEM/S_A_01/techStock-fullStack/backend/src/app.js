import Fastify from "fastify";
import cors from "@fastify/cors"
import { equipamentosRoutes } from './routes/equipamentos-routes.js'


export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(cors, {origin: '*'})

    app.register(equipamentosRoutes, {prefix: '/equipamentos'})


    return app
}