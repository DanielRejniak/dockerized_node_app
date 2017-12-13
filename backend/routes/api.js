const express = require('express');
const router = express.Router();

//Sample API
router.get('/', (req, res) => {
    res.send('Node App Works');
});

module.exports = router;
