const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJson = require('../handlers/sendJson');

exports.login = (req, res) => {
  passport.authenticate('local', (err, user, message) => {
    if (err) {
      console.log('err ' + message);
      return sendJson(res, 500, err);
    }
    if (!user) {
      console.log('!user ' + message);
      return sendJson(res, 400, {
        message: 'Password and/or email are incorrect.'
      });
    }
    if (user) {
      return sendJson(res, 200, { email: user.email, username: user.username });
    }
  })(req, res);
};

exports.logout = (req, res) => {
  res.logout;
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return sendJson(res, 401, 'Please log in first.');
  }
};
