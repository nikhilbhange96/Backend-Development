const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/career', (req, res) => {
  res.send('Apply')
})

app.get('/page/:slug', (req, res) => {
  res.send(`Welcome,${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})