// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



// Basic express server and port setup
const PORT = 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
const app = express();


// requires the content in the models folder
const db = require("./models");
const Workout = require("./models/workout");

app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Connecting to the database
// start mongodb in terminal
// db

mongoose.connect( MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);


  //   newPromise((resolve, reject) => {
  //   reject('error');
  // }).catch((error) => {})

});

  // const url = `mongodb+srv://${process.env.DB_HOST}`;
  // const options = {
  //   user: process.env.DB_USER,
  //   pass: process.env.DB_PASS,
  //   dbName: process.env.DB_NAME,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true
  // };
  // mongoose.connect(uri, options).then(
  //   _ => {
  //     console.info('Database connection stablished');
  //     app.listen(port, function() {
  //       debug(`listening on port ${port}`);
  //     });
  //   },
  //   error => {
  //     console.error('Database connection failed:', error);
  //     throw new Error('Could not connect to the database');
  //   },
