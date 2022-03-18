let express = require('express');
const router = express.Router();

const { 
        startGame,
        createGameState,
        youLazy, 
        addRandomRisk, 
        endGame,             
        chooseHobby,
        choosePads,
        chooseSubject,
        chooseCollege,
        haveKids, 
    } = require("../model/game");

router.get('/start', (req, res) => {
    let startMessage = startGame();
    res.send(startMessage);
    
  });

  router.get("/Name", async (req, res) => {
    let name = req.query.name;
    let createdGame = await createGameState(name);
    res.send(createdGame);
  });

 router.get("/Hobby", async (req, res) => {
    let hobby = req.query.hobby;
    let choice = chooseHobby(hobby);
    res.send(choice);  
 });

 router.get("/Pads", async (req, res) => {
    let pads = req.query.pads;
    let choice = choosePads(pads);
    res.send(choice);  
 });

 router.get("/Subject", async (req, res) => {
     let subject = req.query.subject;
     let choice = chooseSubject(subject);
     res.send(choice);
 });

 router.get("/College", async (req, res) => {
     let college = req.query.college;
     let choice = chooseCollege(college);
     res.send(choice);
 });
 router.get("/youngAdult", async (req, res) => {
    let kids = req.query.kids;
    let choice = haveKids(kids);
    res.send(choice);
});

 module.exports = router;