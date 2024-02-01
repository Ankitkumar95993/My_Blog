const express = require('express');
const {verifyUser} = require('../utils/verifyUser');
const {create} = require('../controller/post.controller');

const router = express.Router();

router.post('/create',verifyUser,create);

module.exports = router;