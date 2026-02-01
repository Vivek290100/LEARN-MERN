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
        let j = 0;
        for (let i = 0; i < 30000000000; i++) {
            j++;
        }
        res.send(`answer is ${j}`)
        
    })
    
    app.listen(3000,()=>{
        console.log("http://localhost:3000");
        
    })
}


const cluster = require("cluster")
const http = require("http")
const os = require("os")

const cpuCount = os.cpus().length

if (cluster.isMaster) {
  console.log(`MASTER started → PID: ${process.pid}`)

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  cluster.on("exit", (worker) => {
    console.log(`WORKER ${worker.process.pid} died`)
    cluster.fork()
  })

} else {
  console.log(`WORKER started → PID: ${process.pid}`)

  const server = http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`)
  })

  server.listen(3000)
}