const User = require("../models/User.model");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
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
    return res.status(400).json({ msg: "Please enter all fields" });
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
