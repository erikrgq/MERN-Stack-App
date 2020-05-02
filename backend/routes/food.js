const router = require('express').Router();
const Food = require('../models/food.model');

//retrieves all of the food 
router.route('/').get((res, req) => {

    const user = req.body.username;

    Food.find()
        .then(food => res.json(food))
        .catch(err => res.statusCode(400).json(err));

});

//add a food item to the databse
router.route('/add').post((res, req) => {

    const name, calories, ingredients, carbs, protein, fat, servings, servingmeasurement;

    name = req.body.name;
    calories = req.body.calories;
    ingredients = req.body.ingredients;
    carbs = req.body.carbs;
    protein = req.body.protein;
    fat = req.body.fat;
    servings = req.body.servings;
    servingmeasurement = req.body.servingmeasurement;

    const newFood = new Food({
        name,
        calories,
        ingredients,
        carbs,
        protein,
        fat,
        sevings,
        servingmeasurement
    });

    newFood.save()
        .then(() => res.json('Food Added'))
        .catch(err => res.status(400).json(err));

});

//deletes food with id           
router.route('/:id').delete((res, req) => {

    Food.findByIdAndDelete(req.params.id)
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

router.route('/:id').put((res, req) => {

    Food.findByIdAndUpdate(id, {calories: req.body.calories, carbs: req.body.carbs, protein: req.body.protein, fat: req.body.fat, servings: req.body.servings}, options, callback)
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err));

});

module.exports = router;