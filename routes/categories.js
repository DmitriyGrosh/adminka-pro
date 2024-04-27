const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, updateCategory, findCategoryById, checkEmptyName, deleteCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

// Подключаем
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', createCategory, sendCategoryCreated);
categoriesRouter.put('/categories/:id', checkEmptyName, findCategoryById, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;