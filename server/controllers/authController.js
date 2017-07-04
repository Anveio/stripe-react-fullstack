const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJson = require('../handlers/sendJson');

// See http://passportjs.org/docs#custom-callback
exports.login = (req, res, next) => {
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
      console.log(user);
      return sendJson(res, 200, { email: user.email, username: user.username });
    }
  })(req, res, next);
};

exports.logout = (req, res) => {
  res.logout;
};

exports.isLoggedIn = (req, res, next) => {
  console.log('This route was hit');
  console.log(req.body);
  return req.isAuthenticated() ? next() : sendJson(res, 401);
};
