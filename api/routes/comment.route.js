const express = require('express');
const {createComment,getPostComments,likeComment, editComment,deleteComment} = require('../controller/comment.controller')
const {verifyUser} = require('../utils/verifyUser')

const router = express.Router();


router.post('/create',verifyUser,createComment);
router.get('/getPostComments/:postId',getPostComments);
router.put('/likeComment/:commentId',verifyUser,likeComment);
router.put('/editComment/:commentId',verifyUser,editComment);
router.delete('/deleteComment/:commentId',verifyUser,deleteComment);



module.exports = router;
