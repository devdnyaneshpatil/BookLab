const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    user_id:String,
    user_name:String,
    user:String,
    title:String,
    author:String,
    description:String,
    img:String
})

const BookModel=mongoose.model("book",bookSchema)

module.exports=BookModel