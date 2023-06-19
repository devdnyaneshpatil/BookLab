const express=require("express")
const BookModel=require("../model/book.model")
const bookRouter=express.Router()


// bookRouter.get("/",async(req,res)=>{
//     try {
//         const notes=await BookModel.find()
//         res.send(notes)
//        } catch (error) {
//         res.json({msg:error.message})
//     } 
// })

// bookRouter.get("/get",async(req,res)=>{
//     try {
//         const books=await BookModel.find({userId:req.body.userId})
//         res.send(books)
//        } catch (error) {
//         res.json({msg:error.message})
//     }    
// })

// -------------admin side routes--------------// 
// bookRouter.delete("/add",async(req,res)=>{
//     const owneridinownerdoc=req.body.userId
//     const hotelId=req.params.id
//     try {
//        const hotel=await HotelModel.findOne({_id:hotelId})
//        const owneridinhoteldoc=hotel.userId
//        if(owneridinhoteldoc===owneridinownerdoc){
//         await HotelModel.findByIdAndDelete({_id:hotelId},req.body)
//         res.status(200).json({msg:"hotel has been updated"})
//        }else{
//         res.status(200).json({msg:"not authorized"})
//        }
//     } catch (error) {
//        res.status(400).json({err:error.message})
//     }  
// })

bookRouter.post("/add/admin",async(req,res)=>{
    try {
        const book= new BookModel(req.body)
        await book.save()
        res.status(200).json({msg:"new book has been added"})
      } catch (error) {
        res.status(200).json({err:error.message})
      }   
})
// bookRouter.patch("/add",async(req,res)=>{
//     const owneridinownerdoc=req.body.userId
//     const hotelId=req.params.id
//     try {
//        const hotel=await HotelModel.findOne({_id:hotelId})
//        const owneridinhoteldoc=hotel.userId
//        if(owneridinhoteldoc===owneridinownerdoc){
//         await HotelModel.findByIdAndUpdate({_id:hotelId},req.body)
//         res.status(200).json({msg:"hotel has been updated"})
//        }else{
//         res.status(200).json({msg:"not authorized"})
//        }
//     } catch (error) {
//        res.status(400).json({err:error.message})
//     }  
// })

module.exports=bookRouter

