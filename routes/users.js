const usersRouter = require('express').Router();

const { findAllUsers, createUser, updateUser, findUserById, checkEmptyNameAndEmail, deleteUser, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', hashPassword, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, findUserById, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;