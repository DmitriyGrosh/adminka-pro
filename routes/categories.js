const categoriesRouter = require('express').Router();

const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');

// Подключаем
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

module.exports = categoriesRouter;