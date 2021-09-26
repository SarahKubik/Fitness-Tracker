// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Basic express server and port setup
const app = express();
const PORT = 3000;

const db = require("./models");

// Routes/Moddels
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
app.use(express.static("public"));
app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Connecting to the database
// start mongodb in terminal
// db
const url = 'mongodb://127.0.0.1:3000/workout';

(async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${url}`);
    } catch (err) {
        console.error(err);
    }
})();

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

