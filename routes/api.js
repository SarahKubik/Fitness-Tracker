const router = require ("express").Router();
const Workout = require ("../models/workout.js");

// Retrieves all workouts
router.get("/api/workouts",  (req, res) =>{
  Workout.find()
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch (err=> {
        res.status(400).json(err);
    });
 });

// Creates new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout=> {
        res.json(dbWorkout);
    })
     .catch(err=> {
         res.status(400).json(err);
    });
});
// Updates and then adds to exercise and returns new results
// For new exercises to meet all schema requirements use "runValidators"
router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findbyIdandUpdate(
        params.id,
        { $push:{exercises: body}},
        { new: true, runValidators: true}
    )
    .then(dbWorkout=> {
        res.json(dbWorkout);
    })
     .catch(err=> {
         res.status(400).json(err);
    });
});
// Retrieves 7 days worth of workouts
router.get("/api/workouts/range", ({query}, res) => {
  Workout.find({day: { $gte: query.start, $lte:query.end}})
    .then(dbWorkout=> {
        res.json(dbWorkout);
    })
     .catch(err=> {
         res.status(400).json(err);
    });
});



module.exports = router;