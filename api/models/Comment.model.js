const mongoose = require("mongoose");

const CommentModel = new mongoose.Schema({
  content: { 
     type: String,
     required: true },
  // postId: { type: mongoose.Types.ObjectId, ref: 'User', required: true},

  postId: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  likes:{
    type:[String],
    default:[]
  },

  numberOfLikes: {
    type:Number,
    default:0
},
   
},{timestamps:true});

const Comment = mongoose.model('Comment',CommentModel);

module.exports = Comment;