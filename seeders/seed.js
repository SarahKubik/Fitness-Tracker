const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: 'resistance',
        name: 'Quad Press',
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
];

// db.Workout.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then((data) => {
//     console.log(data.result.n + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
var workoutCountIndex = 0;

function exitProcess() {
	workoutCountIndex += 1;

	if (workoutCountIndex === workoutSeed.length) {
		process.exit(0);
	}
}

function createWorkout(index) {
	db.Exercise.create(workoutSeed[index].exercises[0]).then(({ _id }) => {
		// console.log("index: " + index);
		db.Workout.create({
			day: workoutSeed[index].day,
			exercises: [_id],
		}).then(() => {
			exitProcess();
		});
	});
}

db.Exercise.deleteMany({}).then(() => {
	db.Workout.deleteMany({}).then(() => {
		for (var i = 0; i < workoutSeed.length; i++) {
			createWorkout(i);
		}
  });
  });