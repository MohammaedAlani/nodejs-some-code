const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/ckeck-auth');
const userController = require('../controller/user');


//singup router

router.post('/singup',userController.user_singup);

//login route

router.post('/login', userController.user_login);

//delete account

router.delete('/:userId', checkAuth ,userController.user_delete);







module.exports = router;