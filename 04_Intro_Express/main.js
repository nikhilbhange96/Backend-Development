// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World23');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const express = require('express')
// const app = express()
// const port = 3000


// //app.getor app.post or app.delete(path,handler)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express'); // Import Express
const app = express(); // Create an instance of Express
const PORT = 3000; // Define a port


//app.use(express.static('public'))

// Set up a basic route
app.get('/', (req, res) => {
   res.send('Hello, World!');
});


// app.get('/contact', (req, res) => {
//    res.send('Contact me');
// });


// app.get('/name', (req, res) => {
//    res.send('Hello, Nikk!');
// });


// app.get('/about', (req, res) => {
//    res.send('About us');
// });


app.get('/blog', (req, res) => {
   res.send('Blog');
});
app.get('/blog/:slug', (req, res) => {
   res.send(`${req.params.slug}`);
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

