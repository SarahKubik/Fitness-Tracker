// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// const dotenv = require("dotenv");
// dotenv.config();

// Basic express server and port setup
const PORT = process.env.PORT || 3006;

const app = express();
// app.set( 'port', ( process.env.PORT || 27017));

// requires the content in the models folder
// const db = require("./models");
// const Workout = require("./models/workout");

app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


// Connecting to the database
// start mongodb in terminal
// db

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/app.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);


    newPromise((resolve, reject) => {
    reject('error');
  }).catch((error) => {})

});

