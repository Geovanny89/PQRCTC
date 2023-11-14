const express = require('express');
const {createTypeIdentity } = require('../../../controllers/admin/types.Identities.controller');
const authMiddleware = require('../../../middleware/sesion');
const checkRol = require('../../../middleware/rol');
const router = express();

router.post('/createdIdentity',authMiddleware,checkRol(["admin"]),createTypeIdentity)


module.exports = router;
