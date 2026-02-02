const express = require("express")
const app = express()
const {Worker} = require("worker_threads")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/loop",(req,res)=>{
    let count = 0
    for (let i = 0; i < 30000000000; i++) {
        count++
        
    }
    res.send(`loop data:${count}`)
})

app.get("/route1",(req,res)=>{
    const worker = new Worker("./worker.js")
    worker.on("message", (j)=>{
        res.send(`answer is ${j}`)
    })
    
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})