const {fork} = require("child_process")

const child = fork("./forFork.js")

child.on("message",msg=>{
    console.log(msg);
    
})