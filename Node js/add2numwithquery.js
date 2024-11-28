const express = require("express")
const app = express()



app.get('/',(req,res)=>{
    const {one,two} = req.query
    const sum =  Number(one)+Number(two)
    res.send(`Hello ${sum}`)
})



app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})

