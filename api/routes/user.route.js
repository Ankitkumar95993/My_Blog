
const express = require('express');
const router = express.Router();
const {updateUser,deleteUser,signout,getUsers} = require('../controller/user.controller');
const {verifyUser} = require('../utils/verifyUser');


router.put('/update/:userId',verifyUser,updateUser);
router.delete('/delete/:userId',verifyUser,deleteUser);
router.post('/signout',signout);
router.get('/getusers',verifyUser,getUsers);;



module.exports = router;