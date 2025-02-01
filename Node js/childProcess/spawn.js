const express = require("express")
const {spawn} = require("child_process")
const app = express()


app.get("/",(req,res)=>{
    res.send("spawn home")
})

app.get("/route1",(req,res)=>{
    const child = spawn("python",["./forSpawn.py"])
    child.stdout.on("data",(data)=>{
        res.send(`spawn home ${data.toString()}`)

    })
})

app.listen(8000,()=>{
    console.log("http://localhost:8000");
    
})