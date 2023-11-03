const express = require('express');
const {createTypeIdentity } = require('../../../controllers/admin/types.Identities.controller')
const router = express();

router.post('/createdIdentity', createTypeIdentity)


module.exports = router;
