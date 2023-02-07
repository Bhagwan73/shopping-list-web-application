const express=require('express')
const router=express.Router()
const {createFruit}=require("../controller/fruitController")


//CREATE FRUITS
router.post("/createFruit",createFruit)

module.exports=router