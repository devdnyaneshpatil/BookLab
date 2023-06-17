const express=require("express")
const FavModel=require("../model/fav.model")
const favRouter=express.Router()
const {fav,Email}=require("../middleware/fav.middleware")

favRouter.post("/add",fav,async(req,res)=>{
  console.log(Email)
})


module.exports=favRouter