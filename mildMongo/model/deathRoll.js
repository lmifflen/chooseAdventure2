const { updateGameById } = require("./gameModel");
const { action } = require("./objects");

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
      gameState.death = gameState.name + action.death.lazy;
    }
  }
}

function addRandomRisk() {
  if (gameState.risky >= 1) {
    gameState.risky = 1 + 1 * Math.random();
    if (gameState.risky >= 1.9) {
      gameState.death = gameState.name + action.death.risky;
    }
  }
}

function wineRandomRisk() {
  if (gameState.wineo >= 1) {
    gameState.wineo = 1 + 1 * Math.random();
    if (gameState.wineo >= 1.9) {
      gameState.death = gameState.name + action.death.wineo;
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
    gameState.death = action.death.nukes.n1 + gameState.name + action.death.nukes.n2;
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
