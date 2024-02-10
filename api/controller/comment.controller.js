const { errorHandler } = require("../utils/error");
const Comment = require("../models/Comment.model");

exports.createComment = async (req, res, next) => {
  try {
      const { content, postId, userId } = req.body;

    if (!content || !postId || !userId) {
        return next(errorHandler(400, "Content, postId, and userId are required"));
      }
      
    if (userId !== req.user.id) {
      return next(errorHandler(403, "you are not allowed to create this post"));
    }


    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();
  } catch (error) {
    next(error);
  }
};
