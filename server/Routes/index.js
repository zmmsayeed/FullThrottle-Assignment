const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Hi from the server')
})

module.exports = router;