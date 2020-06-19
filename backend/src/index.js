import express from "express";
import axios from "axios";

const app = express()

const url = 'http://jsonplaceholder.typicode.com/users'

app.get('/', (request, response) => {
    response.send('<h1>Hello Wolrd</h1>')
})

app.get('/users', async (request, response) => {
    const apiResponse = await axios.get(url)

    const users = apiResponse.data

    return response.json(users)
})

app.listen('3333', () => {
    console.log(`[*] Server running to port: 3333`)
    console.log(`[*] API running on url: http://localhost:3333`)
})