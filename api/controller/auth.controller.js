const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const {errorHandler}  = require('../utils/error.js');
const jwt = require('jsonwebtoken');

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

exports.signin=async(req,res)=>{

  const{email,password} = req.body;
  if(!email || !password || email===''|| password==='') {
    return next(errorHandler(400,'please fill all the fields'));
  }
  try{
    const validUser = await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,' User not found'));
    }

    const validPassword = bcrypt.compareSync(password,validUser.password);
    if(!validPassword){
      return errorHandler(400,'Invalid Password');
    }
    const token =jwt.sign( {id:validUser._id},process.env.JWT_SECRET,);
    const {password:pass,...rest} = validUser._doc;
    res.status(200).cookie('access_Token',token,{httpOnly:true}).json({
      success:true,
      message:'signin successful',
      rest,
    })

  }catch(error){
    next(error);
  }
  


}
