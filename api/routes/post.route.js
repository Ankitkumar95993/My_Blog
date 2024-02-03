const express = require('express');
const {verifyUser} = require('../utils/verifyUser');
const {create,getPosts,deletePosts} = require('../controller/post.controller');

const router = express.Router();

router.post('/create',verifyUser,create);
router.get('/getposts',getPosts);
router.delete('/deletepost/:postId/:userId',verifyUser,deletePosts);

module.exports = router;