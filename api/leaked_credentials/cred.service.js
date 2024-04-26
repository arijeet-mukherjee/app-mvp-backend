const express = require('express');
const credRouter = express.Router();

const credController  = require('./cred.controller');

// Return all the email's details
credRouter.get('/getAllLeakCredentials', credController.findAll);
//Return total number of leak counts of each email
credRouter.get('/leakCounts', credController.leakCounts);
//Return all the unique emails
credRouter.get('/totalEmails', credController.totalEmails);

credRouter.post('/addLeakCredentials', credController.create);

module.exports = credRouter;