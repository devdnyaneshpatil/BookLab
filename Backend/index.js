const express =require ("express")
var cors = require('cors')
const connection=require("./db")
const userRouter=require("./routes/user.routes")
const bookRouter=require("./routes/book.routes")
const favRouter=require("./routes/fav.routes")
require("dotenv").config()
const app=express()

// -----------middleware-----------------//
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/book",bookRouter)
app.use("/fav",favRouter)
 
// ----------------??-------------------//

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to the db")
        console.log(`server is running at ${process.env.PORT}`) 
    } catch (error) {
        console.log(error)
    }
})