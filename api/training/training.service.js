const express = require('express');
const trainingRouter = express.Router();

const trainingController  = require('./training.controller');

trainingRouter.get('/getAllCategories', trainingController.getAllCategories);
trainingRouter.post('/createCategory', trainingController.createCategory);
trainingRouter.post('/createCategoryDetailById', trainingController.createCategoryDetailById);

//trainingRouter.get('/deleteCategory', trainingController.deleteCategory);
//trainingRouter.get('/updateCategory', trainingController.updateCategory);


module.exports = trainingRouter;
//module.exports = trainingController;