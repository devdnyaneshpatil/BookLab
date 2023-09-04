const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    name:String,
    author:String,
    description:String,
    category:String,
    price:{
        type:Number,
        default:0
    },
    img:String,
    retailer:[String]
})

const BookModel=mongoose.model("book",bookSchema)

module.exports=BookModel