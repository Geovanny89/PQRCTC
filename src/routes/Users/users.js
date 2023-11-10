const express = require('express');
const { allPqrsCtc, pqrsPost } = require('../../controllers/Users/pqrsctc.controller');
const { createPqrsResponse, viewPqrs, allResponse } = require('../../controllers/Users/response.controller');
const uploadMiddlewareForResponses= require('../../utils/handleStorageResponse');
const uploadMiddleware = require('../../utils/handleStorage');
// const uploadMiddleware = require('../../utils/handleStorage');



const router = express();

router.get('/pqrsCtc', allPqrsCtc);
router.get('/responses', allResponse)
router.post('/postPqrs',uploadMiddleware.single('myfile'), pqrsPost)

router.post('/pqrs/response',uploadMiddlewareForResponses.single('myfile'),createPqrsResponse)
router.get('/:id',viewPqrs)
// router.post('/createPqrUser',uploadMiddleware.single('myfile'),postPqrUsers)
// router.put('/pqrs/response',uploadMiddleware.single('myfile'), updateResponse);

module.exports=router; 