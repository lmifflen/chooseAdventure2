const { createGame, findGameById, updateGameById } = require("./gameModel");
const { deathRoll, endAge } = require("./deathRoll");
const { action, hobbyObj, subjectObj } = require("./objects");

const startGame = () => {
  return action.welcome;
};

const createGameState = async (name) => {
  let newGameState = await createGame({
    name: name,
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
    ending: "",
  });
  let newGameId = newGameState._id;
  let game = await findGameById(newGameId);
  gameState = game;
  let message = action.start.S1 + name + action.start.S2;
  return message;
};

const chooseHobby = (hobby) => {
  let message;
  gameState.hobby = hobbyObj[hobby];
  switch (hobby) {
    case "Bike":
      message = `${gameState.name}'s ${action.hobby.Bike}`;
      break;
    default:
      message = `${gameState.name}'s ${
        action.hobby.Other1 + gameState.hobby + action.hobby.Other2
      }`;
      break;
  }
  updateGameById(gameState._id, gameState);
  return message;
};

const choosePads = (pads) => {
  if (pads === "no") {
    gameState.risky = 1;
    deathRoll();
    if (gameState.gameOver) {
      gameState.message = gameState.death;
    } else {
      gameState.message = gameState.name + action.pads.No;
    }
  }
  if (pads === "yes") {
    gameState.message = gameState + action.pads.Yes;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const chooseSubject = (subject) => {
  gameState.subject = subjectObj[subject];
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else if (subject === "dropOut") {
    gameState.message =
      action.subject.Dropout1 + gameState.name + action.subject.Dropout2;
  } else {
    gameState.message = gameState.name + action.subject.School;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const chooseCollege = () => {
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    gameState.college = true;
    gameState.message = gameState.name + action.college;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const haveKids = () => {
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    gameState.kids = true;
    gameState.message = gameState.kids;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const getJob = () => {
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    gameState.job = true;
    gameState.message = action.job;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};
const rockStar = () => {
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    gameState.rockstar = true;
    gameState.job = true;
    gameState.wineo = 1;
    gameState.message = action.rockstar;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const dinkCrisis = () => {
  if (gameState.job === true && gameState.kids === false) {
    gameState.dink = true;
    gameState.message = action.crisis.Dink;
  }
  updateGameById(gameState._id, gameState);
};
const homeMakerCrisis = () => {
  if (gameState.kids === true && gameState.job === false) {
    gameState.homemaker = true;
    gameState.message = action.crisis.Homemaker;
  }
  updateGameById(gameState._id, gameState);
};

const nuclearFamCrisis = () => {
  if (gameState.kids === true && gameState.job === true) {
    gameState.nucFam = true;
    gameState.message = action.crisis.Nucfam;
  }
  updateGameById(gameState._id, gameState);
};

const midLifeCrisis = (crisis, hobby) => {
  gameState.hobbyUpdate = hobby;
  if (gameState.hobbyUpdate === "wineo") {
    gameState.wineo = 1;
  } else if (gameState.hobbyUpdate === "") {
    gameState.inactivity = 1;
  }
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    homeMakerCrisis();
    nuclearFamCrisis();
    dinkCrisis();
    return gameState.message;
  }
};

const retirementOption = (retire, midlife) => {
  gameState.midlife = midlife;
  gameState.retire = retire;
  if (gameState.midlife === "wineo") {
    gameState.wineo = 1;
  }
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  } else {
    gameState.message = action.retire;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

const thisMustBeTheEnd = (ending) => {
  gameState.ending = ending;
  deathRoll();
  if (gameState.gameOver) {
    gameState.message = gameState.death;
  }
  endAge();
  if (gameState.ending === "retire" && gameState.hobby === "") {
    gameState.message = `<p> ${gameState.name} lived a boring life without any hobbies. They retired and then died
            6 months later because they had no purpose left in life.
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
  } else if (gameState.ending === "no" && gameState.hobby === "") {
    gameState.message = `<p> ${gameState.name} was found dead in the office at the age of ${gameState.endAge}. 
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
  } else if (gameState.ending === "retire" && gameState.hobby !== "") {
    gameState.message = `<p> ${gameState.name} enjoyed spending time with their family and doing their hobby ${gameState.hobby}
            They lived a full life eventually passing away at ${gameState.endAge}. 
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
  } else if (gameState.ending === "no" && gameState.hobby !== "") {
    gameState.message = `<p> ${gameState.name} kept their energy until late in life continuing to work, spend time with family and doing
            their hobby, ${gameState.hobby}. They eventually passed away at ${gameState.endAge}. 
            <a href=http://localhost:3005/api/start>Please play again!</a></p>`;
  }
  updateGameById(gameState._id, gameState);
  return gameState.message;
};

module.exports = {
  startGame,
  createGameState,
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
