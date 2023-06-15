const express =require ("express")
const connection=require("./db")
const userRouter=require("./routes/user.routes")
const bookRouter=require("./routes/book.routes")
const app=express()

// -----------middleware-----------------//
app.use(express.json())
app.use("/user",userRouter)
app.use("/book",bookRouter)
// ----------------??-------------------//

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to the db")
        console.log("server is running at 8080") 
    } catch (error) {
        console.log(error)
    }
})