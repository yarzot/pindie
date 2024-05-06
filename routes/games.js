const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');
const sendGameCreated = require('../controllers/games');
const createGame = require('../middlewares/games');
const findGameById = require('../middlewares/games');
const sendGameById = require('../controllers/games')

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter;