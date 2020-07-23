const express = require('express');
const router = express.Router();

// importing JSON file as db
const db = require('../Database/users.json')

router.route('/').get((req, res) => {
    try {
        let users = db.members;
        res.status(200).send({
            success: true,
            status: 200,
            data: users
        })
    }
    catch(error) {
        res.status(500).send({
            success: true,
            status: 500,
            message: "Something went wrong"
        })
    }
})

module.exports = router;