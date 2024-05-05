const express = require('express');
const credDetailRouter = express.Router();

const credDetailController  = require('./credDetail.controller');

credDetailRouter.get('/getAllLeakedCredDetailsByCondition', credDetailController.getByCondition);

module.exports = credDetailRouter;