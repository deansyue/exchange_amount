const express = require('express')
const app = express()

const apiRouter = require('./routes/api')

app.use('/api', apiRouter)

app.listen('3000', () => {
  console.log('app is running on localhost:3000')
})

module.exports = app
