// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/node-app';

// Connect to mongodb
mongoose.connect(dbHost, function(err) {
  if(err) {
    console.log('Database Not Connected!');
  } else {
    console.log('Database Connected');
  }
});

// Create Mongoose User Schema
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String
});

// Create Mongoose Model
const User = mongoose.model('User', userSchema);

// -------------
// API Endpoints
// -------------

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all users. */
router.get('/api/costumers', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/api/costumer/:id', (req, res) => {
    var testId = req.params.id;
    console.log('Processing : ' +testId)
      User.findById(testId, (err, users) => {
          if (err) res.status(500).send(error)
          res.status(200).json(users);
      });
});

/* Create a user. */
router.post('/api/costumer/add', (req, res) => {
    let user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Costumer created Successfully'
        });
    });
});

router.post('/api/costumer/delete/:id', (req, res) => {
  var testId = req.params.id;
  User.findByIdAndRemove(testId, function (err,user){
    if (err) throw err;

    user.remove(function(err) {
      if (err) throw err;
      res.status(201).json({
          message: 'Costumer Removed Successfully'
      });
    });
  });
});

router.post('/api/costumer/update/:id', (req, res) => {
  var testId = req.params.id;
  User.findById(testId, function(err, user) {
    if (err) throw err;

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;

    user.save(function(err) {
      if (err) throw err;
      res.status(201).json({
          message: 'Costumer Updated Successfully'
      });    
    });
  });
});

module.exports = router;
