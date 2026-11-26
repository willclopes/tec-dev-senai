// SERVER: inicia o servidor.
import { app } from './app.js'

app.listen({ port: 3007, host: '127.0.0.1' }, (erro, endereco) => {
    if (erro) {
        app.log.error(erro)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${endereco}`)
})
