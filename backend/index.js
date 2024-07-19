//import express from "express"
//import cors from "cors"
//import mongoose from "mongoose"
//const app = express()


//app.use(cors())




// app.listen(9002,()=>{
//     console.log("started at port 9002")
// })

 const express = require("express");
 const app= express();
// const port=5000;
// const path= require("path");
const port=5000;

app.use(express.json())
app.use(express.urlencoded())
 const mongoose = require("mongoose");
 //const { mongoUrl } = require("./keys");
const cors = require("cors");

app.use(cors())
  require('./models/model');
  app.use(express.json())
  app.use(require("./routes/auth"));
          
// mongoose.connect("mongodb+srv://nidhimehra850:e2vI2OlP1yM7xR5j@cluster0.6bamle7.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://nidhi:Password@cluster0.dbakyru.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to mongo");
}).catch((error)=>{
  console.log(error)
})
app.get('/',(req,res)=>{
    res.json("hello nidhi");
})
app.post('/login',(req,res)=>{
   const { email,password} = req.body;
   User.findOne({ email: email}, (err, user) => {
    if(user){
        if(password === user.password ) {
            res.send({message: "Login Successfull", user: user})
        } else {
            res.send({ message: "Password didn't match"})
        }
    } else {
        res.send({message: "User not registered"})
    }
})
})
app.listen(port,()=>{
    console.log("server is running at" +port);
})
mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)