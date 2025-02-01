const express = require("express")
const {fork} = require("child_process")
    const app = express()
    
    app.get("/",(req,res)=>{
        res.send("fork home")
    })
    
    app.get("/route1",(req,res)=>{
        const child = fork("./forFork.js")
        child.on("message", (j)=>{
            res.send(`forked process answer is ${j}`)
        })
        child.kill(); 
        
    })
    
    app.listen(4000,()=>{
        console.log("http://localhost:4000");
        
    })