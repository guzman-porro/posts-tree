const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', function (req, res) {
    const stream = fs.createReadStream('resources/posts-small.json')
    stream.pipe(res)
})

module.exports = router;
