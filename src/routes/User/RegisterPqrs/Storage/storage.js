const express = require('express');
const { postStorage, getStoredFiles } = require('../../../../controllers/user/storage.controller');
const uploadMiddleware = require('../../../../utils/handleStorage');

const router = express();

router.post('/storage',uploadMiddleware.single('myfile'), postStorage)
router.get('/allstorage', getStoredFiles)



module.exports=router;
