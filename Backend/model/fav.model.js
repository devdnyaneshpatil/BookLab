const mongoose =require("mongoose")

const favSchema=mongoose.Schema({
    user_name:String,
    user_id:String,
    category:Array,
    author:Array,
    deal:Array
})

const FavModel=mongoose.model("fav",favSchema)

module.exports=FavModel