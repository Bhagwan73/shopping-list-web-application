const express=require("express")
const mongoose=require("mongoose")
const route=require("./src/route/route")
const app=express()

app.use(express.json())

require("dotenv").config({path:"./config.env"})

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGO_DB}`,{useNewUrlParser:true})
.then(()=>console.log("MONGO-DB IS CONNECTED"))
.catch((err)=>console.log(err))


app.use("/",route)

app.listen(`${process.env.PORT}`,()=>{
    console.log(`EXPRESS RUNNING ON PORT .. ${process.env.PORT}`)
})


