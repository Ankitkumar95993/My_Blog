
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:ture,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }

    },{timeStamp:true},
)

const user = mongoose.model('User',userSchema);
exports.module.user;