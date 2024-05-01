const express = require('express');
const pagesRouter = express.Router();

const pagesController = require('./pages.controller');

pagesRouter.get('/getAllPages', pagesController.getAllPages);
pagesRouter.get('/getPageDetailsByPageId', pagesController.getPageDetailsByPageId);
pagesRouter.get('/getAllPageDetails', pagesController.getAllPageDetails);
pagesRouter.post('/createNewPage', pagesController.createPage);
pagesRouter.post('/createPageDetails', pagesController.createPageDetails);
pagesRouter.put('/updatePageDetails', pagesController.updatePageDetails);
pagesRouter.delete('/deletePages', pagesController.deletePage);



module.exports = pagesRouter;