import Fastify from "fastify";
import cors from "@fastify/cors"
import { equipamentosRoutes } from './routes/equipamentos-routes.js'


export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(cors, {
    origin: '*', // Libera o acesso para qualquer origem (como o seu localhost:5173)
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Libera especificamente o DELETE e o PUT
})

/*explicação
O origin: '*' libera apenas quem pode acessar o seu servidor (qualquer endereço ou porta), mas não libera quais métodos esse endereço tem permissão para executar.
Nas versões atuais do @fastify/cors, a configuração padrão autoriza apenas GET, HEAD e POST. Métodos que alteram ou apagam registros existentes — como PUT e DELETE — continuam bloqueados mesmo com origin: '*' se você não adicionar a lista methods explicitamente.

*/



    app.register(equipamentosRoutes, {prefix: '/equipamentos'})


    return app
}