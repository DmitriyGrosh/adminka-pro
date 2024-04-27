const gamesRouter = require('express').Router();

const { findAllGames, createGame, updateGame } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', createGame, sendGameCreated);
gamesRouter.put('/games/:id', updateGame, sendGameUpdated);

module.exports = gamesRouter;