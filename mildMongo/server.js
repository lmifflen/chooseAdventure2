const express = require("express");
const gameRouter = require("./routes/gameRoutes");
const app = express();
const path = require("path");
const port = 3005;

app.use("/api", gameRouter);

app.listen(port);
console.log("Server started at http://localhost:" + port);
