const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, updateCategory, findCategoryById, checkEmptyName } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated } = require('../controllers/categories');

// Подключаем
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', createCategory, sendCategoryCreated);
categoriesRouter.put('/categories/:id', checkEmptyName, findCategoryById, updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;