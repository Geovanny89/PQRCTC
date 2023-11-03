const express = require('express');

const {allPqrs} = require('../../../controllers/admin/pqrs.controller')

const router  = express();

router.get('/allPqrs', allPqrs)

module.exports= router;
