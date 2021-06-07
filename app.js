const express = require('express')
const factorial = require('./factorial')

const APP_PORT = 3333
const HOSTNAME = 'api'
const app = express()

app.use(express.json())
app.get('/', (_, res) => {
  return res.json({
    message: 'Welcome to API (nova PR)'
  })
})

app.get('/factorial/:value', (req, res) => {
  const { value } = req.params
  if (!value) return res.json({
    error: 'no number provided for factoring'
  })

  return res.json({
    factorial: `Factorial of ${value} is ${factorial(Number(value))}`
  })
})

app.listen(APP_PORT, HOSTNAME, () => {
  console.log(`Hello world!!! http://localhost:${APP_PORT}`)
})
