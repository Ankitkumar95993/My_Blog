const { errorHandler } = require("../utils/error");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

exports.updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "you are not allowed to update this user"));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "password length must be atleast 6 character")
      );
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "username must be between 7 and 20 character")
      );
    }

    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username cannot contains spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (req.body.username.match(/^[a-zA-Z0-9]&$/)) {
      return next(
        errorHandler(400, "Username can contains only letters and numbers")
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return errorHandler(next(403, "you are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

exports.signout = (req,res,next)=>{
  try{
    res
    .clearCookie('access_token')
    .status(200)
    .json('User has been signed out')

  }catch(error){
    next(error);
  }
  

}