const { updateGameById } = require("./gameModel");

function endGame() {
    if (gameState.risky >= 1.9 || gameState.inactivity >= 1.9 || gameState.wineo >=1.9) {
        gameState.gameOver = true;
    }
}

function youLazy() {
    if (gameState.inactivity >= 1) {
        gameState.inactivity = 1 + 1*Math.random();
        if (gameState.inactivity >= 1.9) {
            gameState.death = `<p> ${gameState.name} Did not keep up with their health and died due to inactivity. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`
        }
    
    }
}


function addRandomRisk() {
    if (gameState.risky >= 1) {
        gameState.risky = 1 + 1 * Math.random();
        if (gameState.risky >= 1.9) {
            gameState.death = `<p> ${gameState.name} chose not to wear protective gear and got in a terrible biking accident
            and died. Better luck in the next life. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`
        }
        
               
    }
}

function wineRandomRisk() {
    if (gameState.wineo >= 1) {
        gameState.wineo = 1 + 1 * Math.random();
        if (gameState.wineo >= 1.9) {
            gameState.death = `<p> ${gameState.name} partook in the wine a bit too much. Not sure if it's the fatty liver 
            or drunk driving the killed them but it certainly was the excessive drinking. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`
        }
    }
}

// function hobbyUpdate() {
//     if (gameState.hobbyUpdate) {
//     gameState.hobbyUpdate = hobby
//         if (gameState.hobbyUpdate = "wineo") {
//             gameState.wineo = 1
//             wineRandomRisk();
//        } else if (gameState.hobbyUpdate = "") {
//            gameState.hobby = ""
//            gameState.inactivity = 1
//        }
//     }
// }

const deathRoll = () => {
    // hobbyUpdate();
    addRandomRisk();
    youLazy();
    wineRandomRisk();
    endGame();
    updateGameById(gameState._id, gameState); 
}
module.exports = {
    deathRoll
}