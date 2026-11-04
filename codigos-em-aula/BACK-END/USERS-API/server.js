import { buildApp } from "./src/routes/app.js"
import {configDotenv} from "dotenv"

const app = buildApp() 

app.listen({ port: process.env.PORT ?? 3000}, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})


