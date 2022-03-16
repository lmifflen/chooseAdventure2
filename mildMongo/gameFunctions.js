const { MongoClient, ObjectId } = require("mongodb");

let dbName = 'life';
let connectionString = "mongodb://localhost:27017";
const getDB = async () =>{
    let connection = await MongoClient.connect(connectionString);
    let db = connection.db(dbName);
    return db;
};

const getCollection = async (name) => {
    let db = await getDB();
    let collection = db.collection(name);
    return collection;
};

const createGame = async (newGameData) => {
    let gameCollection = await getCollection("game");
    let result = await gameCollection.insertOne(newGameData);
    return result;
};

const findGameById = async (id) => {
    let gameCollection = await getCollection("game");
    let game = await gameCollection.findOne({ _id: ObjectId(id)});
    return game;
};

const updateGameById = async (id, newGameData) => {
    let gameCollection = await getCollection("game");
    let updated = await gameCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: newGameData }
    );
    return updated;
};

 const findAllGames = async () => {
     let gameCollection = await getCollection("game");
     let gameCursor = await gameCollection.find({});
     let gameArray = await gameCursor.toArray();
     return gameArray;
 };

 const deleteGameById = async (id) => {
    let gameCollection = await getCollection("game");
    let deletedGame = await gameCollection.deleteOne({ _id: ObjectId(id) });
    return deletedGame;
  };


let gameState = {
    name: "",
    risky: 1,
    inactivity: 1,
    gameOver: false,
    hobby: "",
    subject: "",
    college: false,
    kids: false,
    job: false,
    midLifeCrisis: "",
    retire: false
};

const loadGameState = async (id) => {
    let loadedGameState = await findGameById(id);
    gameState = loadedGameState;
    return gameState;
};

let createGameState = async (name) => {
    let newGameState = await createGame({ name: name, risky: 0, inactivity: 0, gameOver: false, hobby: "",
    subject: "",
    college: false,
    kids: false,
    job: false,
    midLifeCrisis: "",
    retire: false });
    let newGameId = newGameState.insertedId;
    let game = await findGameById(newGameId);
    gameState = game;
    return gameState;
};


function endGame() {
    if (gameState.risky >= 1.9) {
        gameState.gameOver = true;
    } else if (gameState.inactivity >= 1.9 ) {
        gameState.gameOver = true;
    }
}

function youLazy() {
    if (gameState.inactivity >= 1) {
        gameState.inactivity += 1*Math.random();
    }
}


function addRandomRisk() {
    if (gameState.risky >= 1) {
        gameState.risky += 1 * Math.random();
    }
}
addRandomRisk();
youLazy();
endGame();

//console.log(gameState)

module.exports= { gameState, youLazy, addRandomRisk, endGame, deleteGameById,
    findAllGames,
    findGameById,
    updateGameById,
    createGame, 
    loadGameState,
    createGameState,
};