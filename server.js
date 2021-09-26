// Dependency to connect to server
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

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
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

 // Routes

app.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
// route for the stats page
app.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/stats.html"));
});
// Route that call workout data from API
app.get("/api/workouts", (req, res) => {
	db.Workout.find({}, null, { sort: { day: 1 } })
		.populate("exercises")
		.then (dbWorkout => {
			res.json(dbWorkout);
		})
		.catch (err=> {
			res.status(400).json(err);
		});
	 });
// Route to update workout data
app.put("/api/workouts/:id", (req, res) => {
	var workoutID = req.params.id;
	db.Exercise.create(req.body)
		.then(({ _id }) =>
			db.Workout.findOneAndUpdate(
				{ _id: workoutID },
				{ $push: { exercises: _id } },
				{ new: true }
			)
		)
		.then (dbWorkout => {
			res.json(dbWorkout);
		})
		.catch (err=> {
			res.status(400).json(err);
		});
	 });
// Route to create new workout
app.post("/api/workouts", (req, res) => {
	db.Workout.create({})
    .then(dbWorkout=> {
        res.json(dbWorkout);
    })
     .catch(err=> {
         res.status(400).json(err);
    });
});
// Route to populate workout dashboard
app.get("/api/workouts/range", (req, res) => {
	db.Workout.find({}, null, { sort: { day: 1 } })
		.populate("exercises")
		.then(dbWorkout=> {
			res.json(dbWorkout);
		})
		 .catch(err=> {
			 res.status(400).json(err);
		});
	});


//  Listens for server port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

