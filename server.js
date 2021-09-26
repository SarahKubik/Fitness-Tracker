// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Basic express server and port setup
const app = express();
const PORT = 3000;


// Routes/Moddels
app.use(require("./routes.index.js")),
app.use(express.static("public"));
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Connecting to the database
// start mongodb in terminal
// db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3000/workout',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
  });
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

