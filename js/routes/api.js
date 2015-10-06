
// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Restful = require('../models/restful');

// Routes
Restful.methods(['get', 'put', 'post', 'delete']);
Restful.register(router, '/lists');


// Return router
module.exports = router;