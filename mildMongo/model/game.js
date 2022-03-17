const { deleteGameById,
    createGame,
    findAllGames,
    findGameById,
    updateGameById } = require("./gameModel");

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

    module.exports= { 
        startGame,
        createdGameState,
        gameState, 
        youLazy, 
        addRandomRisk, 
        endGame, 
        chooseHobby,
        choosePads,
        chooseSubject
    };