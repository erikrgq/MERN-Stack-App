const router = require('express').Router();
const Food = require('../models/food.model');
const User = require('../models/user.model');

// retrieves all of the food 
router.route('/').get((req, res) => {

    const foodList =  [
        "5ecdb1d7973c901b84afb372",
        "5ecdc4c4c2f6dc381022b1fd",
        "5ecdc5840a66cf4ed091d3a8",
        "5ecdc5950a66cf4ed091d3a9",
        "5ecdc5bf0a66cf4ed091d3aa"
    ];

    Food.find().where('_id').in(foodList).exec()
        .then(foodsFound => res.json(foodsFound))
        .catch(err => res.statusCode(400).json(err));

});

// add a food item to the databse
router.route('/add').put((req, res) => {

    try {
        const userID = req.body.id;

        const newFood = new Food({
            calories: req.body.calories,
            ingredients: req.body.ingredients,
            carbs: req.body.carbs,
            protein: req.body.protein,
            fat: req.body.fat,
            servings: req.body.servings,
            servingmeasurement: req.body.servingmeasurement,
            date: req.body.date
        });

        newFood.save()
        .then(() => res.json('food added'))
        .catch(error => res.status(400).json('error: ' + error));

        User.updateOne(
            {_id: userID},
            {$push: {food: newFood._id}},
            function(error, result) {
                if(error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            }
        );
    } catch (err) {
        res.send(err);
    }

});

// deletes food with id           
router.route('/delete').delete((req, res) => {

    const userID = req.body.id;

    const foodID = req.body.food;

    Food.updateOne(
        {},
        {$pull:  { food: [ {_id: foodID} ] } },
        {}
    )
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));

});

// updates the food item by id
router.route('/update/:id').put((req, res) => {

    const id = req.body.id;

    Food.findByIdAndUpdate(id, {calories: req.body.calories, carbs: req.body.carbs, protein: req.body.protein, fat: req.body.fat, servings: req.body.servings})
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

module.exports = router;