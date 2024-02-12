const express = require('express');
const {createComment,getPostComments,likeComments} = require('../controller/comment.controller')
const {verifyUser} = require('../utils/verifyUser')

const router = express.Router();


router.post('/create',verifyUser,createComment);
router.get('/getPostComments/:postId',getPostComments);
router.put('/likeComment/:commentId',verifyUser,likeComments);

module.exports = router;
