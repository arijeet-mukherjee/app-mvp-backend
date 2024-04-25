const express = require('express');
const userRequestRouter = express.Router();
const userRequestController  = require('./userRequest.controller');

userRequestRouter.post('/addUserRequest', userRequestController.create);
userRequestRouter.get('/getAllUserRequests',userRequestController.getAllUserRequests);


module.exports = userRequestRouter;
