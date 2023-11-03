const express = require('express')
const {  postTypePqr, getTypePqrs, updatePqrsType, deleteType} = require('../../../controllers/admin/typesPqrs.controller')

const router = express()

router.post('/typePqr', postTypePqr)
router.get('/types', getTypePqrs)
router.put('/types/:id',updatePqrsType)
router.delete('/typesDelete/:id', deleteType)

module.exports= router;