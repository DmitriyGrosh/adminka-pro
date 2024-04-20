const games = require('../models/game');

const findAllGames = async (req, res, next) => {
	// По GET-запросу на эндпоинт /games найдём все документы игр
  req.gamesArray = await games.find({});
  next();
};

module.exports = findAllGames;