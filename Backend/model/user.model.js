const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:String,
    pass:String,
    email:String,
    name:String,
    bio:{
        type:String,
        default:null
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel