
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

const User = mongoose.model('User',userSchema);

module.exports = User;