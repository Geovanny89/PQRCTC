const express = require('express');

const {postUser, getUser, putUser, deleteUser, userId, resetPassword} = require('../../../controllers/admin/users.controller');

const router = express();

router.get('/user/:id',userId)
router.post('/user',postUser)
router.get('/users',getUser)
router.put('/users/:id',putUser)
router.delete('/users/:id',deleteUser)
router.post('/newPassword', resetPassword)



module.exports=router;