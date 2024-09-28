const jwt = require('jsonwebtoken')

const veryfyjwt = async(req, res, next) => {
    try{
        const token = jwt.sign({userId},"secretkey",{expiresIn:"1h"})
        const decode = jwt.verify(token,"secretkey")
        next()

    }catch(error){
        res.status(401).json({message:"got error",error})
    }
}