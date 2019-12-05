const express = require('express');

const setUpMiddleware = require('./setUpMiddleware');
const unitsController = require('../units/controller');

const server = express();

//  middleware
setUpMiddleware(server);

// routes
server.use('/api/units', unitsController)


module.exports = server;