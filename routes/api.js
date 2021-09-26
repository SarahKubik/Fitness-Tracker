const router = require ("express").Router();
const workout = require ("../models/workout.js");

// Retrieves all workouts
router.get("/api/workouts", (req, res) =>{
    workout.find()
    .then ( results=> res.json(results))
    .catch (err=> res.json(err))
})

// Creates new workout
router.post("/api/workouts", (req, res)=>{
    workout.create({})
    .then (results=> res.json(results))
    .catch (err=> res.json(err))
})
// Updates and then adds to exercise and returns new results
router.put("/api/workouts/:id", (req,res)=>{
    workout.findbyIdandUpdate(
        req.params.id,
        {$push : {exercises: req.body}}
    )
    .then( results=> res.json(results))
    .catch(err=> res.json(err))
})
// Retrieves 7 days worth of workouts
router.get("/api/workouts/range", (req, res) =>{
    workout.find()
    .then(results=> res.json(results))
    .catch(err=> res.json (err))
})

module.exports = router;