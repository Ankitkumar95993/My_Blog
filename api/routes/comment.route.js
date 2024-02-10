const express = require('express');
const {createComment} = require('../controller/comment.controller')
const {verifyUser} = require('../utils/verifyUser')

const router = express.Router();


router.post('/create',verifyUser,createComment);

module.exports = router;
