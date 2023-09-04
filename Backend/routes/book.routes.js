const express=require("express")
const BookModel=require("../model/book.model")
const bookRouter=express.Router()




//-------route for free books------//
bookRouter.get("/",async(req,res)=>{
    try {
        const books=await BookModel.find({price:0})
        res.send(books)
       } catch (error) {
        res.json({msg:error.message})
    } 
})

//------route for priced books require authorization-------//
bookRouter.get("/",async(req,res)=>{
  try {
      const books=await BookModel.find()
      res.send(books)
     } catch (error) {
      res.json({msg:error.message})
  } 
})


// -------------admin side routes--------------// 

bookRouter.post("/add",async(req,res)=>{
    try {
        const book= new BookModel(req.body)
        await book.save()
        res.status(200).json({msg:"new book has been added"})
      } catch (error) {
        res.status(200).json({err:error.message})
      }   
})



bookRouter.patch("/update/:id",async(req,res)=>{
    const bookId=req.params.id
    const payload=req.body
    try {
      await BookModel.findByIdAndUpdate({_id:bookId},payload)
      res.status(200).json({msg:"Book has been updated"})
    } catch (error) {
      res.status(400).json({msg:error.message})
    }
})

bookRouter.delete("/delete/:id",async(req,res)=>{
  const bookId=req.params.id
  try {
    await BookModel.findByIdAndDelete({_id:bookId})
    res.status(200).json({msg:"Book has been deleted"})
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
})


module.exports=bookRouter

