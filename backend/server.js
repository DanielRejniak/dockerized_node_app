// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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

// Get our API routes
const api = require('./routes/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
app.use('/', api);

 //Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));
