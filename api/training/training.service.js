const express = require('express');
const trainingRouter = express.Router();

const trainingController  = require('./training.controller');

trainingRouter.get('/getAllCategoriesData', trainingController.getAllCategoriesData);
trainingRouter.post('/createCategory', trainingController.createCategory);
trainingRouter.post('/createCategoryDetailById', trainingController.createCategoryDetailById);
trainingRouter.put('/updateCategoryDetail', trainingController.updateCategoryDetail);
trainingRouter.patch('/updateCategory', trainingController.updateCategory);
trainingRouter.delete('/deleteCategory', trainingController.deleteCategory);


module.exports = trainingRouter;