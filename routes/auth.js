const express = require('express');

const { validator } = require('../models/user');

const router = express.Router();

// define the routes here...
router.post('/register', (req, res) => {
    const error = validateAttr(req.body);

    if (error) return res.status(400).send(error.details.map((e) => e.message));

    res.json(req.body);
});

const validateAttr = function(user) {
    const {error} = validator.validate(user, { abortEarly: false });

    return error;
}

module.exports = router;