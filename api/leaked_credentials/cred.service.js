const express = require('express');
const credRouter = express.Router();

const credController  = require('./cred.controller');
const user_request_controller = require('../user_request/userRequest.controller');
//All get Requests here
credRouter.get('/getAllLeakCredentials', credController.findAll);
credRouter.get('/getUserRequests', user_request_controller.getAllUserRequests);
credRouter.get('/getUserRequestsByCondition',user_request_controller.getUserRequestsByCondition);
//All delete Requests here
credRouter.delete('/deleteUserRequest',user_request_controller.deleteUserRequest);
//All post requests here
credRouter.post('/addUserRequest', user_request_controller.create);
credRouter.post('/addLeakCredentials', credController.create);

module.exports =  credRouter;