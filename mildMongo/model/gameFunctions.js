const { MongoClient, ObjectId } = require("mongodb");

// let dbName = 'life';
// let connectionString = "mongodb://localhost:27017";
// const getDB = async () =>{
//     let connection = await MongoClient.connect(connectionString);
//     let db = connection.db(dbName);
//     return db;
// };

// const getCollection = async (name) => {
//     let db = await getDB();
//     let collection = db.collection(name);
//     return collection;
// };

// const createGame = async (newGameData) => {
//     let gameCollection = await getCollection("game");
//     let result = await gameCollection.insertOne(newGameData);
//     return result;
// };

// const findGameById = async (id) => {
//     let gameCollection = await getCollection("game");
//     let game = await gameCollection.findOne({ _id: ObjectId(id)});
//     return game;
// };

// const updateGameById = async (id, newGameData) => {
//     let gameCollection = await getCollection("game");
//     let updated = await gameCollection.updateOne(
//         { _id: ObjectId(id) },
//         { $set: newGameData }
//     );
//     return updated;
// };

//  const findAllGames = async () => {
//      let gameCollection = await getCollection("game");
//      let gameCursor = await gameCollection.find({});
//      let gameArray = await gameCursor.toArray();
//      return gameArray;
//  };

//  const deleteGameById = async (id) => {
//     let gameCollection = await getCollection("game");
//     let deletedGame = await gameCollection.deleteOne({ _id: ObjectId(id) });
//     return deletedGame;
//   };


// let gameState = {
//     name: "",
//     risky: 1,
//     inactivity: 1,
//     gameOver: false,
//     hobby: "",
//     subject: "",
//     college: false,
//     kids: false,
//     job: false,
//     midLifeCrisis: "",
//     retire: false
// };

// const loadGameState = async (id) => {
//     let loadedGameState = await findGameById(id);
//     gameState = loadedGameState;
//     return gameState;
// };

// let createGameState = async (name) => {
//     let newGameState = await createGame({ name: name, risky: 0, inactivity: 0, gameOver: false, hobby: "",
//     subject: "",
//     college: false,
//     kids: false,
//     job: false,
//     midLifeCrisis: "",
//     retire: false });
//     let newGameId = newGameState.insertedId;
//     let game = await findGameById(newGameId);
//     gameState = game;
//     return gameState;
// };


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

const chooseHobby = (hobby) => {
    let message;
    if (hobby === 'Bike') {
        gameState.hobby = 'biking';
        message = gameState.name + `'s favourite hobby is biking. Do you wear pads when you bike? If yes: http://localhost:3005/Pads?pads=yes
        If no : http://localhost:3005/Pads?pads=no`
    }
    if (hobby === 'Swim') {
        gameState.hobby = 'swimming';
        message = gameState.name + `'s favourite hobby is swimming.`
    }
    if (hobby === 'Crafts') {
        gameState.hobby = 'crafts';
        message = gameState.name + `'s favourite hobby is crafts`
    }
    updateGameById(gameState._id, gameState)
    return message;
};

const choosePads = (pads) => {
    let message;
    if (pads === 'no') {
        gameState.risky = 1;
        addRandomRisk();
        if (gameState.risky >= 1.9) {
            message = gameState.name + ` chose not to wear protective gear and got in a terrible biking accident
            and died. Better luck in the next life. To play again http://localhost:3005/start`
        } else {
        message = gameState.name + ` is a bad ass and doesn't wear pads while biking. What's your favourite subject 
        in school? for gym: http://localhost:3005/Subject?subject=Gym
        for math: http://localhost:3005/Subject?subject=Math
        if you just want to drop out: http://localhost:3005/Subject?subject=dropOut 
        `
        };
    } else {
        message = gameState.name + ` loves safety and sports!. What's your favourite subject 
        in school? for gym: http://localhost:3005/Subject?subject=Gym
        for math: http://localhost:3005/Subject?subject=Math
        if you just want to drop out: http://localhost:3005/Subject?subject=dropOut 
        `
        };
    updateGameById(gameState._id, gameState)
    return message;
    }

const chooseSubject = (subject) => {
    let message;
    if (subject = 'dropOut') {
        gameState.subject = 'dropOut';
        message = `School just wasn't for ${gameState.name}. What's your plan? 
        If you want to be a rockstar: http://localhost:3005/youngAdult?youngAdult=rockstar
        If you want to have kids: http://localhost:3005/youngAdult?youngAdult=kids
        If you want to get a jerb: http://localhost:3005/youngAdult?youngAdult=job `
    };
    if (subject = 'Gym') {
        gameState.subject = 'Gym';
        message = `${gameState.name} Finished high school. What's your plan? 
        If you want to go to college: http://localhost:3005/youngAdult?youngAdult=college
        If you want to get a job: http://localhost:3005/youngAdult?youngAdult=job `
    };
    if (subject = 'Math') {
        gameState.subject = 'Math';
        message = `${gameState.name} Finished high school. What's your plan? 
        If you want to go to college: http://localhost:3005/youngAdult?youngAdult=college
        If you want to get a job: http://localhost:3005/youngAdult?youngAdult=job `
    };
}
//addRandomRisk();
//youLazy();
//endGame();

//console.log(gameState)

module.exports= { gameState, youLazy, addRandomRisk, endGame, deleteGameById,
    findAllGames,
    findGameById,
    updateGameById,
    createGame, 
    loadGameState,
    createGameState,
    chooseHobby,
    choosePads,
    chooseSubject
};