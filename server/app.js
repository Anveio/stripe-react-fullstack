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

module.exports = app;
