import { buildApp } from "./app.js"
import { configDotenv } from "dotenv"

configDotenv()

const app = buildApp()

app.listen({ port: process.env.PORT ?? 3003 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log('Servidor rodando em ${address}')
})


//http://127.0.0.1:PORTA/equipamentos