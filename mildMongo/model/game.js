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
            if (gameState.risky >= 1.9) {
                message = `<p> ${gameState.name} chose not to wear protective gear and got in a terrible biking accident
                and died. Better luck in the next life. <br>
                <a href=http://localhost:3005/api/start>Please play again!</a></p>`
            }
            return message;
            updateGameById(gameState._id, gameState);            
        }
    }
let gameState = {
    name: "",
    risk: 0,
    inactivity: 0,
    hobby: "",
    subject: "",
    college: false,
    kids: false,
    job: false,
    midLifeCrisis: false,
    retire: false,
};

// const startGame = () => {
//     return `Welcome to the game of life. Please enter your name 
//     http://localhost:3005/api/Name?name=`;
// };

const startGame = () => {
    return `<p>Welcome to the game of life. Please enter your name </p>
    <input id="name" />
    <a id="link"><button>Go</button></a>
    <script>
    let nameInput = document.getElementById('name')
        nameInput.addEventListener('keyup', (e)=>{
            let link = document.getElementById('link')
            link.setAttribute('href', 'http://localhost:3005/api/Name?name='+e.target.value)
        })
    </script>`;
};

const createGameState = async (name) => {
    let newGameState = await createGame ({ name: name,
    risk: 0,
    inactivity: 0,
    hobby: "",
    subject: "",
    college: "",
    kids: false,
    job: false,
    midLifeCrisis: false,
    retire: false,  });
    let newGameId = newGameState._id;
    let game = await findGameById(newGameId);
    gameState = game;
    let message = `<p>Welcome to the game of life ${name}! Do you want your hobby to be <a href=http://localhost:3005/api/Hobby?hobby=Bike>Biking</a>, 
    <a href=http://localhost:3005/api/Hobby?hobby=Swim>Swimming</a> or <a href=http://localhost:3005/api/Hobby?hobby=Crafts>Crafts</a>?</p>
    `;
     return message;
};

const chooseHobby = (hobby) => {
    let message;
    if (hobby === 'Bike') {
        gameState.hobby = 'biking';
        message = `<p>${gameState.name}'s favourite hobby is biking. How do you feel about wearing pads while you bike? <br>
        <a href=http://localhost:3005/api/Pads?pads=yes>Safety first!</a> <br>
        <a href=http://localhost:3005/api/Pads?pads=no>I don't need no protection!</a>
        </p>`
    }
    if (hobby === 'Swim') {
        gameState.hobby = 'swimming';
        message = `<p>${gameState.name}'s favourite hobby is swimming. What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a> </p>`
    }
    if (hobby === 'Crafts') {
        gameState.hobby = 'crafts';
        message = `<p>${gameState.name}'s favourite hobby is crafts.  What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a> </p>`
    }
    updateGameById(gameState._id, gameState)
    return message;
};

const choosePads = (pads) => {
    let message;
    if (pads === 'no') {
        gameState.risky = 1;
        addRandomRisk();
        // if (gameState.risky >= 1.9) {
        //     message = `<p> ${gameState.name} chose not to wear protective gear and got in a terrible biking accident
        //     and died. Better luck in the next life. <br>
        //     <a href=http://localhost:3005/api/start>Please play again!</a></p>`
        message = `<p>${gameState.name} is a bad ass and doesn't wear pads while biking. What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a> </p> 
        `
        } else {
        message = `<p>${gameState.name} loves safety and sports!. What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a></p> 
        `
        };
    updateGameById(gameState._id, gameState)
    return message;
    }

    const chooseSubject = (subject) => {
        let message;
        addRandomRisk();
            if (subject === 'dropOut') {
            gameState.subject = 'dropOut';
            message = `<p>School just wasn't for ${gameState.name}. What's your plan? <p>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=rockstar>I'm going to be a rockstar</a>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=kids>Time to have kids!</a>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=job>I need a jerb</a> `
        }   else if (subject === 'Gym') {
            gameState.subject = 'Gym';
            message = `<p>${gameState.name} Finished high school. What's your plan? <p>
            <br><a href=http://localhost:3005/api/College?college=college>Time to go to College</a>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=job>I'm going to get a job</a> `
        }   else if (subject = 'Math') {
            gameState.subject === 'Math';
            message = `${gameState.name} Finished high school. What's your plan? 
            <br><a href=http://localhost:3005/api/College?college=college>Time to go to College</a>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=job>I'm going to get a job</a> `
        };
    updateGameById(gameState._id, gameState);
    return message;
    }

    const chooseCollege = (college) => {
        let message;
        addRandomRisk();
            if (college) {
            gameState.college = true;
            message = `<p>${gameState.name} finished college. What's your plan now? <p>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=kids>Time to have kids!</a>
            <br><a href=http://localhost:3005/api/youngAdult?youngAdult=job>I need a job to pay off these damn student loans</a> `
            };
    updateGameById(gameState._id, gameState);
    return message;
    }


    module.exports= { 
        startGame,
        createGameState,
        gameState, 
        youLazy, 
        addRandomRisk, 
        endGame, 
        chooseHobby,
        choosePads,
        chooseSubject,
        chooseCollege,
    };