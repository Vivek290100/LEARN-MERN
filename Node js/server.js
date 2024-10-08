// const http = require("http")

// const app = http.createServer((req,res)=>{
//     res.write("qwertyuio")
//     res.end()
// })

// app.listen(3000,()=>{
//     console.log(`http://localhost:3000`);
    
// })




const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})