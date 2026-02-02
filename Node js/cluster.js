const cluster = require("cluster")
const os = require("os")

if(cluster.isMaster){
    console.log(`master running ${process.pid}`);
    const length = os.cpus().length
    for (let i = 0; i < length; i++) {
        cluster.fork()
        cluster.fork()
    }
    
}else{
    console.log(`worker${process.pid} started`);
    const express = require("express")
    const app = express()
    
    app.get("/",(req,res)=>{
        res.send("hello")
    })
    
    app.get("/route1",(req,res)=>{
        let count = 0;
        for (let i = 0; i < 30000000000; i++) {
            count++;
        }
        res.send(`answer is ${j}`)
        
    })
    
    app.listen(3000,()=>{
        console.log("http://localhost:3000");
        
    })
}