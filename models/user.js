const mongoose = require('mongoose');
const joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

const validator = joi.object({
    name: joi.string().min(5).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(20).required(),
});

exports.User = User;
exports.validator = validator;