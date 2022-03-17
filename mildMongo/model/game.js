const { deleteGameById,
    createGame,
    findAllGames,
    findGameById,
    updateGameById } = require("gameModel");

let gameState = () => {

}

const startGame = () => {
    return `Welcome to the game of life. Please enter your name here :
    curl http://localhost:3005/Name?name=`
};


const createdGameState = async (name) => {
    let newGameId = await createGame ({ name: name });
    let message = `Welcome to the game of life ${name} If you want your hobby to be Biking => curl http://localhost:3005/Hobby?hobby=Bike
    , If you want your favourite hobby to be crafts => curl http://localhost:3005/Hobby?hobby=Crafts,
    If you want your favourite hobby to be Swimming => curl http://localhost:3005/Hobby?hobby=Swimming
     `;
     return message;
};