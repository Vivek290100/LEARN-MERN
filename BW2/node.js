const express = require("express")

const app = express()


app.listen(3000,() =>{
    console.log("http://localhost:4000");
})


const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});