import express from 'express'
import cors from 'cors'
import routes from './routes'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`[*] Server running to port: ${process.env.APP_PORT}`)
  console.log(`[*] API running on url: http://localhost:${process.env.APP_PORT}`)
})
