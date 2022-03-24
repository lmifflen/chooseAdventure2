const { updateGameById } = require("./gameModel");

function endGame() {
  if (
    gameState.risky >= 1.9 ||
    gameState.inactivity >= 1.9 ||
    gameState.wineo >= 1.9 ||
    gameState.nukes > 1.98
  ) {
    gameState.gameOver = true;
  }
}

function youLazy() {
  if (gameState.inactivity >= 1) {
    gameState.inactivity = 1 + 1 * Math.random();
    if (gameState.inactivity >= 1.9) {
      gameState.death = `<p> ${gameState.name} Did not keep up with their health and died due to inactivity. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
    }
  }
}

function addRandomRisk() {
  if (gameState.risky >= 1) {
    gameState.risky = 1 + 1 * Math.random();
    if (gameState.risky >= 1.9) {
      gameState.death = `<p> ${gameState.name} chose not to wear protective gear and got in a terrible biking accident
            and died. Better luck in the next life. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
    }
  }
}

function wineRandomRisk() {
  if (gameState.wineo >= 1) {
    gameState.wineo = 1 + 1 * Math.random();
    if (gameState.wineo >= 1.9) {
      gameState.death = `<p> ${gameState.name} partook in the wine a bit too much. Not sure if it's the fatty liver 
            or drunk driving the killed them but it certainly was the excessive drinking. <br>
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
    }
  }
}

const endAge = () => {
  let i = 0;
  while (i <= 0.90) {
    gameState.endAge += i;
    i = Math.random();
  }
};

const nuclearWar = () => {
  gameState.nukes = 1 + 1 * Math.random();
  if (gameState.nukes >= 1.98) {
    gameState.death = `<p> Unfortunatly the descisions ${gameState.name} made in life do not matter.
        They were born in the wrong timeline. Nuclear war has broke out and they slowly starved to death in 
        the post apocalyptic nuclear winter. <br>
        <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
  }
};

const deathRoll = () => {
  addRandomRisk();
  youLazy();
  wineRandomRisk();
  nuclearWar();
  endGame();
  updateGameById(gameState._id, gameState);
};

module.exports = {
  deathRoll,
  endAge,
};
