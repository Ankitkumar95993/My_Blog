const { errorHandler } = require("../utils/error");
const Comment = require("../models/Comment.model");



exports.createComment = async (req, res, next) => {
  try {
      const { content, postId, userId } = req.body;
    

    if (!content || !postId || !userId) {
        return next(errorHandler(400, "Content, postId, and userId are required"));
      }
      
    if (userId !== req.user.id) {
      return next(errorHandler(403, "you are not allowed to create this comment"));
    }


    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

exports.getPostComments=async(req,res,next)=>{
  try{
    const comments = await Comment.find({postId:req.params.postId}).sort({createdAt:-1,
    });
     res.status(200).json(comments);
  }catch(error){
    next(error);

  }


}

exports.likeComments = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return nexr(errorHandler(404, "comment not found"));
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      comment.numberOfLikes+=1;
      comment.likes.push(req.user.id);

    } else {
      comment.likes.splice(userIndex,1);
      comment.numberOfLikes+=1;
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};