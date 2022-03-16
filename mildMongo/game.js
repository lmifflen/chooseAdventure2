const express = require("express");
const { youLazy, addRandomRisk, endGame, deleteGameById,
    findAllGames,
    findGameById,
    updateGameById,
    createGame, 
    loadGameState,
    createGameState,
} = require("./gameFunctions")
const app = express();
const path = require('path');
const port = 3005;
app.listen(port)
console.log('Server started at http://localhost:' + port);

// Getting user name
app.get('/start', (req, res) => {
   
    res.send(`Welcome to the game of life. Please enter your name here :
     curl http://localhost:3005/Name?name=
     or to load a previous game:
     curl http://localhost:3005/loadGame?gameId=`);
  });
 
  app.get("/Name", async (req, res) => {
    let name = req.query.name;
    let createdGame = await createGameState(name);
    console.log("createdGame is", createdGame);
    res.send(
      `Welcome to the game of life ${name} If you want your hobby to be Biking => curl http://localhost:3005/Hobby?hobby=Biking 
    , If you want your favourite hobby to be crafts => curl http://localhost:3005/Hobby?hobby=Crafts,
    If you want your favourite hobby to be Swimming => curl http://localhost:3005/Hobby?hobby=Swimming
     `
    );
  });

  app.get("/Hobby", async (req, res) => {
    let hobby = req.query.hobby;
    let name = await createGameState(hobby);
    console.log("createdGame is", createdGame);
    res.send(
      `Luke's favourite hobby is ${hobby}`
    );
  });

