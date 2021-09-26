const router = require ("express").Router();
const path = require("path");

router.get("/exercise", (reg, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});


router.get("/stats", (reg, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


router.get("/exercise", (reg, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



module.exports = router;