//require('dotenv').config.config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(` SServer is runnng a port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed!!!!",err);
})










/*

import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express"
const app =express();
(async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on Port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()
*/