//IMPORT LIBRARIES
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = express.Router();

//IMPORT SERVICES
const authRouter = require('./auth/auth.service');
const trainingRouter = require('./training/training.service');
const paymentRouter = require('./subscription/payment.service');
const termsRouter = require('./terms_and_conditions/tc.service');
const credRouter = require('./leaked_credentials/cred.service');
const helpdeskRouter = require('./helpdesk/helpdesk.service');
const pagesRouter = require('./pages/pages.service');
const leakedCredDetailsRouter = require('./leaked_credentials/cred_detail.service');
const newsletterRouter = require('./newsletter/newsletter.service');


//IMPORT MIDDLEWARES
const errorHandler = require('../_middleware/error-handler');

//MIDDLEWARES
appRouter.use(errorHandler);
appRouter.use(bodyParser.json());

appRouter.get('/', async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send('Server is running');
  } else {
    res.status(404).send('Not found');
  }
});

// ROUTES
appRouter.use('/auth', authRouter);
appRouter.use('/trainings', trainingRouter);
appRouter.use('/payments', paymentRouter);
appRouter.use('/terms', termsRouter);
appRouter.use('/leakCredentials', credRouter);
appRouter.use('/helpdesk', helpdeskRouter);
appRouter.use('/pages', pagesRouter);
appRouter.use('/newsletter', newsletterRouter);
appRouter.use('/leakCredentialDetails', leakedCredDetailsRouter);

module.exports = { appRouter };