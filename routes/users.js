const usersRouter = require('express').Router();

const { findAllUsers, createUser, updateUser } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserUpdated } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', createUser, sendUserCreated);
usersRouter.put('/users/:id', updateUser, sendUserUpdated);

module.exports = usersRouter;