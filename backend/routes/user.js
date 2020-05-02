const router = require('express').Router();
let User = require('../models/user.model');

// Retrieves all the users
router.route('/').get((req, res) => {

    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: '+error));

});

// Adds new a new user
router.route('/add').post((req, res) => {

    const newUser = new User({
        user: req.body.user,
        calories: req.body.calories,
        caloriegoal: req.body.caloriegoal
    });

    newUser.save()
        .then(() => res.json('user added'))
        .catch(error => res.status(400).json('error: ' + error));

});

router.route('/:id').put((req, res) => {

    const id = req.body.id;
    const updatedCalories = req.body.calories;

    User.findByIdAndUpdate(id, {calories: updatedCalories})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
        
})

module.exports = router;