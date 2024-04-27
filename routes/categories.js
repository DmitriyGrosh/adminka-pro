const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated } = require('../controllers/categories');

// Подключаем
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', createCategory, sendCategoryCreated);

module.exports = categoriesRouter;