const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodname: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    servingmeasurement: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;