const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const {errorHandler}  = require('../utils/error.js');

exports.signup = async (req,res,next) => {
  // console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400,'please fill all the fields'));
  }
  
  const hashedPassword =  bcrypt.hashSync(password,10);

  const newUser = new User({ 
    username, 
    email, 
    password : hashedPassword,
  });

  try {
    await newUser.save();
    res.json({
      message: "signup successful",
    });
  } catch (error) {
   next(error);
  }
};
