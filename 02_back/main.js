// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// module based
// import {a,b,c,d} from './mymodule.js'

// console.log(a,b,c,d);


// import obj from './mymodule.js'

// console.log(obj);

//require base commonjs

const a=require('./mymodule.js')

console.log(a)

