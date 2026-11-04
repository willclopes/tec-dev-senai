import Fastify from 'fastify'
import { userRoutes } from './src/routes/users-routes.js'


export function buildApp() {

    const app = Fastify({ logger: true })
    app.register(userRoutes, {prefix: '/users'})

    return app
}

//clean architecture