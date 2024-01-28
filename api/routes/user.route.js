
const express = require('express');
const router = express.Router();
const {updateUser,deleteUser} = require('../controller/user.controller');
const {verifyUser} = require('../utils/verifyUser');


router.put('/update/:userId',verifyUser,updateUser);
router.delete('/delete/:userId',verifyUser,deleteUser);


module.exports = router;