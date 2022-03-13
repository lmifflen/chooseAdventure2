let gameState = {
    name: "",
    risky: 1,
    inactivity: 1,
    gameOver: false
}
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

console.log(gameState)

module.exports= { gameState, youLazy, addRandomRisk, endGame }