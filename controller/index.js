const express = require('express');
const router = express.Router();
const parser = require('./parser/parser');

router.use((req, res, next) => {
    console.log('Router Configuration');
    next();
});

// router.post('/', (req, res) => {
//     console.log("POST");
//     res.end("POST");
// });

router.post('/api/:version/parse', parser.parseV1Data);

// router.post('/api/v2/parse', parser.parseV1Data);

module.exports = router;