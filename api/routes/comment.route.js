const express = require('express');
const {createComment, getPostComments} = require('../controller/comment.controller')
const {verifyUser} = require('../utils/verifyUser')

const router = express.Router();


router.post('/create',verifyUser,createComment);
router.get('/getPostComments/:postId',getPostComments)

module.exports = router;
