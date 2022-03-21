const { MongoGridFSChunkError } = require("mongodb");
const mongoose = require("./mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  risky: {
    type: Number,
    default: 0,
  },
  inactivity: {
    type: Number,
    default: 0,
  },
  hobby: {
    type: String,
  },
  subject: {
    type: String,
  },
  college: {
    type: Boolean,
  },
  rockstar: {
    type: Boolean,
  },
  kids: {
    type: Boolean,
  },
  job: {
    type: Boolean,
  },
  dink: {
    type: Boolean,
  },
  nucFam: {
    type: Boolean,
  },
  homemaker: {
    type: Boolean,
  },
  midLifeCrisis: {
    type: Boolean,
  },
  retire: {
    type: Boolean,
  },
  message: {
    type: String,
  },
  midlife: {
    type: String,
  },
  wineo: {
    type: Number,
  },
  death: {
    type: String,
  },
  gameOver: {
    type: Boolean,
  },
  hobbyUpdate: {
    type: String,
  },
  nukes: {
    type: Number,
  },
  endAge: {
    type: Number,
  },
  ending: {
    type: String,
  },
});

const Game = mongoose.model("Game", gameSchema);

const createGame = async (newGameData) => {
  let result = await Game.create(newGameData);
  return result;
};

const findGameById = async (id) => {
  let game = await Game.findById(id);
  return game;
};

const updateGameById = async (id, newGameData) => {
  let updated = await Game.findByIdAndUpdate(id, newGameData, { new: true });
  return updated;
};

const findAllGames = async () => {
  let gameArray = await Game.find();
  return gameArray;
};

const deleteGameById = async (itemToDelete) => {
  let deletedGame = await Game.findByIdAndDelete(id);
  return deletedGame;
};

module.exports = {
  deleteGameById,
  createGame,
  findAllGames,
  findGameById,
  updateGameById,
};
