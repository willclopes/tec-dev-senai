import http from 'http';

let movies = [
    { id: 1, title: "O Senhor dos Anéis", year: 2001 },
    { id: 2, title: "Matrix", year: 1999 },
    { id: 3, title: "Interestelar", year: 2014 },
]

async function getBody(req) {
    let body = ''
    for await (const chunk of req) body += chunk
    
    return body ? JSON.parse(body) : {}
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const [, route, idStr] = req.url.split('/')

    if(route !== 'movies') {
        return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
    }

//----------------- GET ALL
    if (req.method === 'GET' && !idStr) {
        res.writeHead(200)
        return res.end(JSON.stringify(movies))
    }

//----------------- GET BY ID
    if (req.method === 'GET' && idStr) {
        const movie = movies.find(m => m.id === Number(idStr))
        if(!movie) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }
        
        return res.writeHead(200).end(JSON.stringify(movie))
    }

//----------------- POST MOVIE
    if (req.method === 'POST') {
        const body = await getBody(req)
        const newMovie = { id: Date.now(), ...body }
        movies.push(newMovie)

        return res.writeHead(201).end(JSON.stringify(newMovie))
    }

//----------------- UPDATE MOVIE PUT
    if (req.method === 'PUT' && idStr) {
        const body = await getBody(req)
        const index = movies.findIndex(m => m.id === Number(idStr))
        if (index === -1) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }

        movies[index] = { ...movies[index], ...body }

        return res.writeHead(200).end(JSON.stringify(movies[index]))
    }

//----------------- DELETE MOVIE
    if (req.method === 'DELETE' && idStr) {
        movies = movies.filter(m => m.id !== Number(idStr))
        
        return res.writeHead(204).end(JSON.stringify({ sucess: "Item removido com sucesso!" }))
    }
})

server.listen(3000, () => {
    console.log(`API rodando em http://localhost:${3000}`)
})