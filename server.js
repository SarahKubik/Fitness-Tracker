// Dependency to connect to server
const express = require("express");
const mongoose = require("mongoose");


// Basic express server and port setup
const app = express();
const PORT = 27017;

// Connecting to the database
const url = 'mongodb://127.0.0.1:27017/workout';

(async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`MongoDB Connected: ${url}`);
    } catch (err) {
        console.error(err);
    }
})();

