const router = require('express').Router();
const Food = require('../models/food.model');
const User = require('../models/user.model');

// retrieves all of the food 
router.route('/').put((req, res) => {

    const foodList = req.body.food;

    Food.find().where('_id').in(foodList).exec()
        .then(foodsFound => res.json(foodsFound))
        .catch(err => res.statusCode(400).json(err));

});

// add a food item to the databse
router.route('/add').put((req, res) => {

        const userID = req.body.id;

        const newFood = new Food({
            foodname: req.body.foodname,
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
        )
        .catch(error => res.status.length(400).json(error));

});

// deletes food with id           
router.route('/delete').delete((req, res) => {

    const userID = req.body.id;

    const foodID = req.body.food;

    User.updateOne(
        {_id: userID},
        {$pull:  { food: [ {foodID} ] } },
        {}
    )
    .then(res => res.json('food removed'))
    .catch(err => res.status(400).json(err));

    Food.findByIdAndDelete(foodID)
        .then(res => res.json('food deleted'))
        .catch(error => res.status(400).json(error));

});

// updates the food item by id
router.route('/update/:id').put((req, res) => {

    const id = req.body.id;

    Food.findByIdAndUpdate(id, {calories: req.body.calories, carbs: req.body.carbs, protein: req.body.protein, fat: req.body.fat, servings: req.body.servings})
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

module.exports = router;