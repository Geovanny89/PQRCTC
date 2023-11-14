const express = require('express');
const {registerCtrl,loginCtrl} = require('../../controllers/Auth/auth')
const {validateRegister, validateLogin}= require('../../validators/auth');
const authMiddleware = require('../../middleware/sesion');
const checkRol = require('../../middleware/rol');

const router= express();

router.post('/register',authMiddleware,checkRol(["admin"]), validateRegister,registerCtrl)
router.post('/login', validateLogin,loginCtrl)

module.exports = router;