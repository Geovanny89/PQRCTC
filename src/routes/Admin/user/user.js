const express = require('express');

const {postUser, getUser, putUser, deleteUser, userId} = require('../../../controllers/admin/users.controller');

const router = express();

router.get('/:id',userId)
router.post('/user',postUser)
router.get('/users',getUser)
router.put('/users/:id',putUser)
router.delete('/users/:id',deleteUser)



module.exports=router;