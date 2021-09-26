const router = require ("express").Router();
const path = require("path");

router.get('/stats', (reg, res) => {
    res.sendFile(path.join(_dirname, '../public/stats.html'));
});

router.get('/exercise', (reg, res) => {
    res.sendFile(path.join(_dirname, '../public/exercise.html'));
});

router.get('/', (reg, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});
module.exports = router;