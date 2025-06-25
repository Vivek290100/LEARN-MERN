const express = require("express")

const app = express()


app.get("/name/:id",(req,res)=>{
    const id = req.params.id
    console.log("tttt",id);
    
    res.send(id)
})


app.listen(3000,()=>{

})