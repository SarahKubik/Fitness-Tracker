const router = require ("express").Router();
const path = require("path");

router.get('/stats', (reg, res) => {
    res.sendFile(path.join(_dirname, '../public/stats.html'));
});

router.get('/exercise', (reg, res) => {
    res.sendFile(path.join(_dirname, '../public/exercise.html'));
});

module.exports = router;