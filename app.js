const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const errorHandlers = require('./handlers/errorHandlers');

require('./handlers/passport');
const routes = require('./routes');
const CORS_WHITELIST = require('./constants/frontend');

const app = express();
debugger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: (origin, callback) =>
    CORS_WHITELIST.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

app.use(cors(corsOptions));

app.use(`/api/v1`, routes);

app.use(errorHandlers.displayAuthenticationError);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://dalmadaniela.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

module.exports = app;
