const {spawn} = require("child_process")

const child = spawn("node",["forSpawn.js"])

child.stdout.on("data",data=>{
    console.log(`${data}`);
    
})