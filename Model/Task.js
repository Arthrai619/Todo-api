const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    id : Number,
    Task : String,
    StartDate:Date,
    EndDate:Date,
    status : {
        type:Boolean,
        default : true
    }
},{timestamps:true})

module.exports = mongoose.model('task',taskSchema)
