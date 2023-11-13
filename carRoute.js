const express = require("express");
const carsSchema = require("./model/carsSchema");
const carRoute = express.Router();
module.exports = carRoute;
carRoute.get("/",(req,res)=>{
    carsSchema.find((err,data) =>{
        if(err)
            return err
        else
            res.json(data);
    })
})