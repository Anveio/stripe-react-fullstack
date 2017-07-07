const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('express-jwt');

const { sendJson, getTokenFromHeader } = require('../handlers/util');

// See http://passportjs.org/docs#custom-callback
exports.login = (req, res) => {
  return passport.authenticate('local', (err, user, message) => {
    if (err) {
      console.log('err ' + message);
      return sendJson(res, 500, err);
    }
    if (!user) {
      console.log('!user ' + message);
      return sendJson(res, 403, {
        message: 'Password and/or email are incorrect.'
      });
    }
    if (user) {
      return sendJson(res, 200, { token: user.generateJWT() });
    }
  })(req, res);
};

exports.logout = (req, res) => {
  res.logout;
};

exports.isLoggedIn = jwt({
  secret: 'kappa',
  userProperty: 'payload',
  getToken: getTokenFromHeader
});
