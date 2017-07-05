const cors = require('cors'),
  express = require('express'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  MongoStore = require('connect-mongo')(session),
  expressValidator = require('express-validator'),
  errorHandlers = require('./handlers/errorHandlers');

require('./handlers/passport');
const routes = require('./routes');
const CORS_WHITELIST = require('./constants/frontend');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: 60000
    },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: (origin, callback) =>
    CORS_WHITELIST.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

app.use(cors(corsOptions));

app.use('/api', routes);

app.use(errorHandlers.displayAuthenticationError);

module.exports = app;
