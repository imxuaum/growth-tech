import express from "express";

const app = express()

app.get('/', (request, response) => {
    response.send('<h1>Hello Wolrd</h1>')
})

app.listen('3333', () => {
    console.log(`[*] Server running to port: 3333`)
    console.log(`[*] API running on url: http://localhost:3333`)
})