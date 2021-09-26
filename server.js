// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Basic express server and port setup
const PORT = 27017;
const app = express();

app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Connecting to the database
// start mongodb in terminal
// db
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

 // Routes
 app.use(require("./routes/api.js"));
 app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

