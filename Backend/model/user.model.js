const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:String,
    pass:String,
    email:String,
    name:String,
    bio:String
})

const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel