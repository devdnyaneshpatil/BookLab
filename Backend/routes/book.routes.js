const express=require("express")
const BookModel=require("../model/book.model")
const bookRouter=express.Router()


bookRouter.get("/",async(req,res)=>{
    
})

bookRouter.get("/:id",async(req,res)=>{
    
})

// -------------admin side routes--------------// 
bookRouter.delete("/add",async(req,res)=>{
    
})

bookRouter.post("/add",async(req,res)=>{
    
})
bookRouter.patch("/add",async(req,res)=>{
    
})

module.exports=bookRouter

