const express = require('express');
const {verifyUser} = require('../utils/verifyUser');
const {create,getPosts} = require('../controller/post.controller');

const router = express.Router();

router.post('/create',verifyUser,create);
router.get('/getposts',getPosts);

module.exports = router;