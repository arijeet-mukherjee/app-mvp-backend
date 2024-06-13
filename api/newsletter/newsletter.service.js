const express = require('express');
const newsletterRouter = express.Router();

const newsletterController = require('./newsletter.controller');

newsletterRouter.post('/subscribe', newsletterController.thankYouMail);

module.exports = newsletterRouter;