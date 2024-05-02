const express = require('express');
const credDetailRouter = express.Router();

const credDetailController  = require('./credDetail.controller');

credDetailRouter.get('/getByCondition', credDetailController.getByCondition);

module.exports = credDetailRouter;