// define variables
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// connect to DB
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/presidents-app');

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);


// Set up engine stuff and middleware
// Defining what views to use and what templeting engine if we need import
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// start server
app.listen(3000);


// define variables import stuff
// connect to db
// Set up engine stuff and middleware
// defining what views to use and what templeting engine if we need import
// load in routes
// start the server 