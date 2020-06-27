import express from 'express'
import axios from 'axios'

const app = express()

const userUrl = 'http://jsonplaceholder.typicode.com/users'
const postUrl = 'http://jsonplaceholder.typicode.com/posts'

app.get('/users', async (request, response) => {
  const apiResponse = await axios.get(userUrl)

  const users = apiResponse.data

  return response.json(users)
})

app.get('/posts', async (request, response) => {
  const apiResponse = await axios.get(postUrl)

  const posts = apiResponse.data

  return response.json(posts)
})

app.listen('3333', () => {
  console.log('[*] Server running to port: 3333')
  console.log('[*] API running on url: http://localhost:3333')
})
