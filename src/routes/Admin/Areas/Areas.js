const express = require('express');
const {allArea, createArea,  updateArea, deleteArea, oneArea } = require('../../../controllers/admin/area.controller')
const router = express();


router.get('/area',oneArea)
router.get('/allArea',allArea);
router.post('/createArea', createArea);
router.put('/update/:id', updateArea);
router.delete('/delete/:id', deleteArea)

module.exports = router;