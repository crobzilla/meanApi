/**
 * Created by crobinson on 7/6/15.
 */

var express     = require('express');        // call express
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var Restaurant  = require('./models/Restaurant');
var router      = require('./controllers/controller');
var app         = express();                 // define our app using express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/meanApi'); // connect to our database

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port: ' + port);