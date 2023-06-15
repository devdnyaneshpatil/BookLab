const mongoose=require("mongoose")
const { stringify } = require("qs")

const userSchema=mongoose.Schema({
    userName:String,
    pass:String,
    email:String,
    name:String,
    bio:String
})

const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel