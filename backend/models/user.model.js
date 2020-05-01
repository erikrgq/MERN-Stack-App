const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    caloriegoal: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;