const gamesRouter = require('express').Router();

gamesRouter.get('/games', (req, res) => {
  console.log("daata")
});

module.exports = gamesRouter;