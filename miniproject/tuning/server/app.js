const express = require("express");
const dotenv=require("dotenv")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

dotenv.config({path: './config.env'})
require('./db/conn')
const port = process.env.PORT
const Users = require('./models/UserSchema')
const authenticate = require('./middleware/authenticate')
const app=express()
//These methods are used to get data and cookies from frontend
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())


app.get('/',(req,res) => {
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log("server listening at port 3001")
})