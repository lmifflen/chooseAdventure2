const express = require("express");

const app = express();
const path = require('path');
const port = 3007;

app.use(express.static(path.join(__dirname, "public")))
const { addRandomRisk, gameState, youLazy, endGame } = require(path.join(__dirname, "public", "gameFunctions.js"));






app.listen(port);
app.get('/', (req, res) => {
    res.render(index)
})

app.get('/1', (req,res) => {
    res.json(gameState)
})