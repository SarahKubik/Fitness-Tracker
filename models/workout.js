//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Setup of daily workout schema
const workoutSchema = new Schema (
    {
    day: {
     type: Date,
     default: () => new Date ()
 },

 //Exercise details
 exercises:[{
     type: {
        type: String,
        trim: true,
        required: "Is this a resistance or cardio exercise"
     },
     name: {
         type: String,
         trim: true,
         required: "what is the name of the exercise"
     },
     duration: {
         type: Number,
         required: "How many minutes was the exercise performed"
     },
     weight: {
         type: Number
     },
     reps: {
         type: Number
     },
     sets: {
         type: Number
     },
     distance: {
         type: Number
     }

    }]

    });


    toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
  }


    // adds a dynamically-created property to schema
    workoutSchema.virtual("totalDuration").get(function() {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;