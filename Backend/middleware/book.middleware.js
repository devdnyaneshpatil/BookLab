var jwt = require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
       try {
         var decoded = jwt.verify(token, 'shhhhh')
         req.body.user_id=decoded.user_id
         req.body.user_name=decoded.user_name
         req.body.user=decoded.user
         next()
       } catch (error) {
         res.json({msg:"not authorized"})
       }
    }else{
     res.status(200).json({msg:"please Login first"})
    }
 }
 
 module.exports=auth