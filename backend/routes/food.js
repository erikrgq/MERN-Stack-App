const router = require('express').Router();
const Food = require('../models/food.model');

// retrieves all of the food 
router.route('/').get((req, res) => {

    const user = req.body.username;

    Food.find()
        .then(food => res.json(food))
        .catch(err => res.statusCode(400).json(err));

});

// add a food item to the databse
router.route('/add').post((req, res) => {

    const newFood = new Food({
        owner: req.body.owner,
        calories: req.body.calories,
        ingredients: req.body.ingredients,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fat: req.body.fat,
        servings: req.body.servings,
        servingmeasurement: req.body.servingmeasurement,
    });

    newFood.save()
        .then(() => res.json('Food Added'))
        .catch(err => res.status(400).json(err));

});

// deletes food with id           
router.route('/:id').delete((req, res) => {

    const id = req.body.id;

    Food.findByIdAndDelete(id)
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

// updates the food item by id
router.route('/:id').put((req, res) => {

    const id = req.body.id;

    Food.findByIdAndUpdate(id, {calories: req.body.calories, carbs: req.body.carbs, protein: req.body.protein, fat: req.body.fat, servings: req.body.servings})
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

module.exports = router;