import Fastify from "fastify";
import cors from "@fastify/cors"


export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(cors, {origin: '*'})

    app.register(userRouters, {prefix: '/equipamentos'})


    return app
}