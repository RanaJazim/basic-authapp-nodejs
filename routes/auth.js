const express = require('express');
const _ = require('underscore');

const { validator, login_validator } = require('../models/user');
const { register, login } = require('../services/user_service');

const router = express.Router();

// define the routes here...
router.post('/register', async (req, res) => {
    const error = validateAttr(req.body, true);
    if (error) return res.status(422).send(_.pluck(error.details, 'message'));

    const { isRegister, user } = await register(req.body);
    if (isRegister == false) return res.status(403).send("User already exists.");

    res.json(user);
});

router.post('/login', async (req, res) => {
    const error = validateAttr(req.body);
    if (error) return res.status(422).send(_.pluck(error.details, 'message'));

    const user = await login(req.body);
    if (user == null) return res.status(403).send("Your email or password is incorrect");

    const token = await user.generateToken();
    res.json(token);
});

const validateAttr = function(user, isRegister = false) {
    if (isRegister)
        var {error} = validator.validate(user, { abortEarly: false });
    else 
        var {error} = login_validator.validate(user, { abortEarly: false });

    return error;
}

module.exports = router;