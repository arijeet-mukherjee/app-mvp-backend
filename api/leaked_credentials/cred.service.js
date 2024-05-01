const express = require('express');
const credRouter = express.Router();

const credController  = require('./cred.controller');

credRouter.get('/getTotalLeakCounts', credController.getTotalLeakCounts);

credRouter.get('/getAllLeakCredentials', credController.findAll);

credRouter.post('/addLeakCredentials', credController.create);

module.exports = credRouter;