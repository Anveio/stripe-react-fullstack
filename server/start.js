const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
  console.error(`Error connecting to database ${err.message}`);
});

// Models must be registered before importing app.
require('./models/User');

const app = require('./app');

switch (app.get('env')) {
  case 'development':
    console.log('using development');
    app.use(express.static(path.join(__dirname, '/../client/public')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/../client/public/index.html'));
    });
    break;
  case 'production':
    console.log('using production');
    app.use(express.static(path.join(__dirname, '/../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '../client/build/index.html'));
    });
    break;
  default:
    return console.log('Invalid environment setting');
}

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Server running on port ${server.address().port}`);
});
