const express = require('express');
const users = require('./Admin/user/user')
const types= require('./Admin/TypePqrs/typePqrs')
const pqrs = require('./User/RegisterPqrs/Pqrs/prqs')
const storage = require('./User/RegisterPqrs/Storage/storage')
const tipeidentity = require('./Admin/Typesidentity/TipeIdentity')
const pqrsAdmin= require('./Admin/pqrs/Allpqrs')
const areas = require('./Admin/Areas/Areas')

const router = express();

router.use(users)
router.use(types)
router.use(pqrs)
router.use(storage)
router.use(tipeidentity)
router.use(pqrsAdmin)
router.use(areas)






module.exports = router;
