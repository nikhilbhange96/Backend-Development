const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
  console.log("get request")
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
  console.log("post request")
  res.send('Hello World post!')
})

// put request is used to update
app.put('/', (req, res) => {
  console.log("put request")
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, name: ["Nikk", "Nikhil"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Server is running on http://localhost:${port}`);
})