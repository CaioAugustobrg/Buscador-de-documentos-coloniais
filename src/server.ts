import express from 'express'
import router from './routes/index'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(bodyParser.json())
const port = process.env.PORT ?? 3030
const host = process.env.HOST ?? '127.0.0.1'
app.use(cors({
  origin: 'https://oxossi.vercel.app',
  credentials: true
}));
app.get('/', (request, response) => {
response.type('text/plain')
response.send('Server is running')
})
app.use(router)
app.listen(port, () => {
console.log(`Server is running on http://${host}:${port}; press ctrl + c to terminate`)
})