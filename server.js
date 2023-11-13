const express = require('express');
const app = express();
const carRoute = require("./carRoute");
const { default: mongoose } = require('mongoose');

mongoose.set("strictQuery",true);
mongoose.connect('mongodb+srv://yash25465:root@cluster0.tcxwg9c.mongodb.net/cars')

const connection = mongoose.connection
connection.on("open",()=>console.log("Connected to DB"));
connection.on("error",()=>console.log("Error occurred"));

app.use("/carRoute",carRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})