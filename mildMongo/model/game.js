const { deleteGameById,
    createGame,
    findAllGames,
    findGameById,
    updateGameById } = require("./gameModel");
const { deathRoll } = require("./deathRoll");

    // function endGame() {
    //     if (gameState.risky >= 1.9) {
    //         gameState.gameOver = true;
    //     } else if (gameState.inactivity >= 1.9 ) {
    //         gameState.gameOver = true;
    //     }
    // }
    
    // function youLazy() {
    //     if (gameState.inactivity >= 1) {
    //         gameState.inactivity += 1*Math.random();
    //     }
    // }
    
    
    // function addRandomRisk() {
    //     if (gameState.risky >= 1) {
    //         gameState.risky += 1 * Math.random();
    //         if (gameState.risky >= 1.9) {
    //             message = `<p> ${gameState.name} chose not to wear protective gear and got in a terrible biking accident
    //             and died. Better luck in the next life. <br>
    //             <a href=http://localhost:3005/api/start>Please play again!</a></p>`
    //         }
    //         return message;
    //         updateGameById(gameState._id, gameState);            
    //     }
    // }

    // function wineRandomRisk() {
    //     if (gameState.wineo >= 1) {
    //         gameState.wineo += 1 * Math.random();
    //         if (gameState.wineo >= 1.9) {
    //             gameState.message = `<p> ${gameState.name} partook in the wine a bit too much. Not sure if it's the fatty liver 
    //             or drunk driving the killed them but it certainly was the excessive drinking. <br>
    //             <a href=http://localhost:3005/api/start>Please play again!</a></p>`
    //         }
    //         console.log(gameState.wineo);
    //         return gameState.message;
    //         updateGameById(gameState._id, gameState);            
    //     }
    // }

// let gameState = {
//     name: "",
//     risk: 0,
//     inactivity: 0,
//     hobby: "",
//     subject: "",
//     college: false,
//     kids: false,
//     job: false,
//     dink: false,
//     midLifeCrisis: false,
//     retire: false,
//     wineo: 0,
// };

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
    risky: 0,
    inactivity: 0,
    hobby: "",
    subject: "",
    college: false,
    kids: false,
    job: false,
    rockstar: false,
    dink: false,
    midLifeCrisis: false,
    nucFam: false,
    homemaker: false,
    retire: false,
    message: "",
    midlife: "",
    wineo: 0,
    death: "",
    hobbyUpdate: "",
    gameOver: false,
    nukes: 1,
    endAge: 60,
    ending: ""
  });
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
    
    if (pads === 'no') {
        gameState.risky = 1;
        deathRoll();
        if (gameState.gameOver) {
        gameState.message = gameState.death
        } else {        
        gameState.message = `<p>${gameState.name} is a bad ass and doesn't wear pads while biking. What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a> </p> 
        `
        }}; 
        if (pads === 'yes') {
        gameState.message = `<p>${gameState.name} loves safety and sports!. What's your favourite subject in school?<br>
        <a href=http://localhost:3005/api/Subject?subject=Gym>Gym!</a><br>
        <a href=http://localhost:3005/api/Subject?subject=Math>I'm a mathlete.</a><br>
        <a href=http://localhost:3005/api/Subject?subject=dropOut>Skool sucks. Imma drop out.</a></p> 
        `
        };
    updateGameById(gameState._id, gameState)
    return gameState.message;
    }

    const chooseSubject = (subject) => {
        deathRoll();
            if (gameState.gameOver) {
                gameState.message = gameState.death
            } else if (subject === 'dropOut') {
            gameState.subject = 'dropOut';
            gameState.message = `<p>School just wasn't for ${gameState.name}. What's your plan? <p>
            <br><a href=http://localhost:3005/api/Rockstar?rockstar=rockstar>I'm going to be a rockstar</a>
            <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
            <br><a href=http://localhost:3005/api/Job?job=job>I need a jerb</a> `
        }   else if (subject === 'Gym') {
            gameState.subject = 'Gym';
            gameState.message = `<p>${gameState.name} Finished high school. What's your plan? <p>
            <br><a href=http://localhost:3005/api/College?college=college>Time to go to College</a>
            <br><a href=http://localhost:3005/api/Job?job=job>I'm going to get a job</a> `
        }   else if (subject = 'Math') {
            gameState.subject === 'Math';
            gameState.message = `${gameState.name} Finished high school. What's your plan? 
            <br><a href=http://localhost:3005/api/College?college=college>Time to go to College</a>
            <br><a href=http://localhost:3005/api/Job?job=job>I'm going to get a job</a> `
        };
    updateGameById(gameState._id, gameState);
    return gameState.message;
    }

    const chooseCollege = (college) => {
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (college) {
            gameState.college = true;
            gameState.message = `<p>${gameState.name} finished college. What's your plan now? <p>
            <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
            <br><a href=http://localhost:3005/api/Job?job=job>I need a job to pay off these damn student loans</a> `
            };
    updateGameById(gameState._id, gameState);
    return gameState.message;
    }

    const haveKids = (kids) => {
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (kids) {
        gameState.kids = true;
        gameState.message = `<p>Congratulations! you have wonderful children! They sure take up a lot of time! Are you keeping up with your hobbies?</p>
        <br><a href=http://localhost:3005/api/Crisis?crisis=crisis&hobby=wineo>Wine o'clock is my hobby.</a>
        <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Of course. Balance is important.</a>
        <br><a href=http://localhost:3005/api/Crisis?crisis=crisis&hobby="">Nope.</a>`
        };
    updateGameById(gameState._id, gameState);
    return gameState.message;
    }

    const getJob = (job) => {
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (job) {
        gameState.job = true;
        gameState.message = `<p>You managed to land a job. Life's good. What now?</p>
        <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
        <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Imma do me.</a>`
        };
    updateGameById(gameState._id, gameState);
    return gameState.message;
    }
    const rockStar = (rockstar) => {
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (rockstar) {
        gameState.rockstar = true;
        gameState.job = true;
        gameState.wineo = 1;
        gameState.message = `<p>You're a struggling musician. That's the life you chose. What now?</p>
        <br><a href=http://localhost:3005/api/Kids?kids=kids>Time to have kids!</a>
        <br><a href=http://localhost:3005/api/Crisis?crisis=crisis>Imma do me.</a>`
        };
    updateGameById(gameState._id, gameState);
    console.log(gameState.message)
    return gameState.message;
    }

    const dinkCrisis = (dink) => {
            if (gameState.job === true && gameState.kids === false) {
            gameState.dink = true;
            gameState.message = `<p>You've been working now for 20 years. You're starting to feel empty on the inside. 
                Something is missing. This must be the mid life crisis. What will you do?
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=wineo>Let me show you my wine cellar</br></a>
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=jacked>Time to start lifting weights and get a tattoo</br></a>
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=yachty>I think I'll get a yacht like Jeffery</br></a>
            </p>`
        };
        updateGameById(gameState._id, gameState);
    }
    const homeMakerCrisis = (homemaker) => {
            if (gameState.kids === true && gameState.job === false) {
            gameState.homemaker = true;
            gameState.message = `<p>Your kids are all grown up now and you dont have a job. 
            Time to exlpore who you are. What will you do?
            <br><a href=http://localhost:3005/api/Ending?ending=no>Wine o'clock is my hobby.</br></a>
            <br><a href=http://localhost:3005/api/Retire?retire=true>I think I'll get a job.</br></a>
            </p>`
        }
        updateGameById(gameState._id, gameState);
        }

     const nuclearFamCrisis = (nucFam) => {
        
            if (gameState.kids === true && gameState.job === true) {
            gameState.nucFam = true;
            gameState.message = `<p>You've succesfully raised your children! Now you have time and money to explore the real you. 
            What will you do?
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=wineo>Wine o'clock is my hobby.</br></a>
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=yogi>I think I'll become a yoga instructor.</br></a>
            <br><a href=http://localhost:3005/api/Retire?retire=true&midlife=car>I think I'll get a yellow convertible</br></a>
            </p>`
        };
        updateGameById(gameState._id, gameState);
        }

    const midLifeCrisis = (crisis, hobby) => {
        gameState.hobbyUpdate = hobby
        if (gameState.hobbyUpdate === "wineo") {
            gameState.wineo = 1
       } else if (gameState.hobbyUpdate === "") {
           gameState.inactivity = 1
       }
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else{
        homeMakerCrisis();
        nuclearFamCrisis();
        dinkCrisis();
        return gameState.message;
        }
        };
        
    const retirementOption = (retire, midlife) => {
        gameState.midlife = midlife;
        gameState.retire = retire;
        if (gameState.midlife === 'wineo') {
            gameState.wineo = 1
            }
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (gameState.retire){
            gameState.message = `<p> Do you want to retire now? </p>
            <a href=http://localhost:3005/api/Ending?ending=retire>Yes</br></a>
            <a href=http://localhost:3005/api/Ending?ending=no>No</br></a>`
        }
        updateGameById(gameState._id, gameState);
        console.log(gameState.message)
        return gameState.message;
    }
    
    const thisMustBeTheEnd = (ending) => {
        gameState.ending = ending;
        deathRoll();
        if (gameState.gameOver) {
            gameState.message = gameState.death
        } else if (gameState.ending === 'retire' && gameState.hobby === ""){
            gameState.message = `<p> ${gameState.name} lived a boring life without any hobbies. They retired and then died
            6 months later because they had no purpose left in life.</p>`
        } else if (gameState.ending === 'no' && gameState.hobby === "") {
            gameState.message = `<p> ${gameState.name} was found dead in the office at the age of ${gameState.age}. </p>`
        } else if ( gameState.ending === 'retire' && gameState.hobby !== "") {
            gameState.message = `<p> ${gameState.name} enjoyed spending time with their family and doing their hobby ${gameState.hobby}
            They lived a full life eventually passing away at ${gameState.age}. </p>`
        } else if ( gameState.ending === 'no' && gameState.hobby !== "") {
            gameState.message = `<p> ${gameState.name} kept their energy until late in life continuing to work, spend time with family and doing
            their hobby, ${gameState.hobby}. They eventually passing away at ${gameState.age}. </p>`
        }
        updateGameById(gameState._id, gameState);
        console.log(gameState.message)
        return gameState.message;
    }
    





    module.exports= { 
        startGame,
        createGameState,
        // youLazy, 
        // addRandomRisk, 
        // endGame, 
        chooseHobby,
        choosePads,
        chooseSubject,
        chooseCollege,
        haveKids,
        getJob,
        rockStar,
        dinkCrisis,
        nuclearFamCrisis,
        midLifeCrisis,
        retirementOption,
        thisMustBeTheEnd,
    };