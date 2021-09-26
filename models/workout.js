//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Setup of daily workout schema
const workoutSchema = new Schema ({
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
         required: "What is the name of the exercise"
     },
     duration: {
         type: Number,
         required: "How many minutes did you perform this exercise"
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

// Create workout model
const workout = mongoose.model("workout", workoutSchema);

module.export = workout;