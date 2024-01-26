
const express = require('express');
const router = express.Router();
const {updateUser} = require('../controller/user.controller');
const {verifyUser} = require('../utils/verifyUser');


router.put('/update/:userId',verifyUser,updateUser);


module.exports = router;