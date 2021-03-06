let express = require("express");
const router = express.Router();

const {
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
} = require("../model/game");

router.get("/start", (req, res) => {
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
router.get("/Kids", async (req, res) => {
  let kids = req.query.kids;
  let choice = haveKids(kids);
  res.send(choice);
});
router.get("/Job", async (req, res) => {
  let job = req.query.job;
  let choice = getJob(job);
  res.send(choice);
});
router.get("/Rockstar", async (req, res) => {
  let rockstar = req.query.rockstar;
  let choice = rockStar(rockstar);
  res.send(choice);
});
router.get("/Dink", async (req, res) => {
  let dink = req.query.dink;
  let choice = dinkCrisis(dink);
  res.send(choice);
});
router.get("/Crisis", async (req, res) => {
  let crisis = req.query.crisis;
  let hobby = req.query.hobby;
  let choice = midLifeCrisis(crisis, hobby);
  res.send(choice);
});
router.get("/Retire", async (req, res) => {
  let retire = req.query.retire;
  let midlife = req.query.midlife;
  let choice = retirementOption(retire, midlife);
  res.send(choice);
});
router.get("/Ending", async (req, res) => {
  let ending = req.query.ending;
  let choice = thisMustBeTheEnd(ending);
  res.send(choice);
});

module.exports = router;
