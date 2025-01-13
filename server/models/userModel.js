const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: ["Please enter your name", true]
    },
    email: {
        type: String,
        required: ["Please enter your email address", true],
    },
    age: {
        type: Number,
        required: ["please enter your age", true],
    },
    mobile: {
        type: Number,
        required: ["Please enter your mobile number", true],
    },
    work: {
        type: String,
        required: ["Please enter your occupation", true]
    },
    address: {
        type: String,
        required: ["Please enter your address", true],
    },
    description: {
        type: String,
        required: ["Please enter your description", true]
    }
});

const userModel = new mongoose.model("userModel", userSchema);

module.exports = userModel;