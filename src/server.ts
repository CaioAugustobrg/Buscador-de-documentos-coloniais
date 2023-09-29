import express from 'express'
const app = express()
const port = 3000
app.get('/', (request, response) => {
  response.type('text/plain')
  response.send('Server is running')
})
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}; press ctrl + c to terminate`)
})
