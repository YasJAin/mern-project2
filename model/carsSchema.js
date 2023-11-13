const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema({
    "name": {type:String},
    "image": {type:String},
    "rentPerHour": {type:Number},
    "fuelType": {type:String},
    "bookedTimeSlots": {type:Date},
    "capacity": {type:Number}
},{
    collection: "cars"
})

module.exports = mongoose.model("carsSchema",carsSchema);