const { MongoGridFSChunkError } = require('mongodb');
const mongoose = require('./mongoose');

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
    kids: {
        type: Boolean,
    },
    job: {
        type: Boolean,
    },
    midLifeCrisis: {
        type: String,
    },
    retire: {
        type: Boolean,
    },
});

const Game = mongoose.model("Game", gameSchema)

const createGame = async (newGameData) => {
    let result = await Game.create(newGameData);
    return result;
};

const findGameById = async (id) => {
        let game = await Game.findById(id);
    return game;
};

const updateGameById = async (id, newGameData) => {
        let updated = await Game.findByIdAndUpdate(id, newGameData, { new: true } );
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