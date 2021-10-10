// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



// Basic express server and port setup
const PORT = 27017;
const app = express();


// requires the content in the models folder
const db = require("./models");

app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Connecting to the database
// start mongodb in terminal
// db

const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// requires the content in the models folder
app.use(require("./routes/api.js"));

//  Listens for server port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

