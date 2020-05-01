const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error: '+error));
});

router.route('/add').post((req, res) => {
    const user = req.body.user;

    const newUser = new User({user});

    newUser.save()
    .then(() => res.json('user added'))
    .catch(error => res.status(400).json('error: ' + error));
});

module.exports = router;