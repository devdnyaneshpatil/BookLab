var jwt = require('jsonwebtoken')

var Email=null
const fav=(req,res,next)=>{
    const {email}=req.body
    next()
}

module.exports={fav,Email}