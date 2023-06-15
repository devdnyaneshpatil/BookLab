const express=require("express")
const UserModel=require("../model/user.model")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const userRouter=express.Router()


// --------------sign up route------------------//
userRouter.post("/signup",async(req,res)=>{
    const {userName,pass,email,name,bio}=req.body
    try {
      const user=await UserModel.findOne({email})
      if(user){
          res.status(200).json({Msg:"owner already exists!!"})
      }
      bcrypt.hash(pass, 2, async(err, hash)=> {
          // Store hash in your password DB.
          const newUser= new UserModel({userName,email,pass:hash,name,bio})
          await newUser.save()
          res.status(200).json({msg:"new owner has been registered",user:req.body})
      })
  
    } catch (error) {
      res.status(400).json({err:error.message})
    }
      
  })
//   -----------------------signup route ends-----------------//

// ---------------------------login route start----------------------//

userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try {
       const user=await UserModel.findOne({email})
       if(user){
        bcrypt.compare(pass,user.pass,async(err, result)=>{
            // result == true
            if(result){
                var token = jwt.sign({ user_id: user._id,user_name:user.userName,user:user.name }, 'shhhhh')
                res.status(200).json({msg:"Login successfull",token:token})
            }else{
                res.status(200).json({msg:"Check password again"})
            }
        })
       }else{
        res.status(200).json({msg:"user not found"})
       } 
    } catch (error) {
        res.status(400).json({err:error.message})
    }
})

//------------------login route ends here--------------//



module.exports=userRouter