const express = require("express");
const app = express();
const path=require("path");

app.get("/choco",(req,res)=>{
    res.sendFile(path.join(__dirname,"chocolate.html"));
})
app.get("/shop",(req,res)=>{
    res.sendFile(path.join(__dirname,"shopping.html"));
})
app.get("/edu",(req,res)=>{
    res.sendFile(path.join(__dirname,"education.html"));
})
app.listen(3980,   ()=>{
    console.log("server is running");
})