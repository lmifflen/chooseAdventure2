const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");

let connectionString = "mongodb://localhost:27017/life";

mongoose.connect(connectionString);

module.exports = mongoose;
