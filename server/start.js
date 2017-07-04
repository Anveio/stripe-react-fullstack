const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const errorHandlers = require('./handlers/errorHandlers');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
  console.error(`Error connecting to database ${err.message}`);
});

// Models must be registered BEFORE importing app.
require('./models/User');

const app = require('./app');

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('App starting in development');
    app.use(express.static(path.join(__dirname, '/../client/public')));
    app.use(errorHandlers.developmentErrors);
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/../client/public/index.html'));
    });
    break;
  case 'production':
    console.log('App starting in production');
    app.use(express.static(path.join(__dirname, '/../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '../client/build/index.html'));
    });
    break;
  default:
    return console.log('Invalid environment setting');
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});
