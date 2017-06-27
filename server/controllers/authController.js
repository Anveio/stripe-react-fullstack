const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJson = require('../handlers/sendJson');

exports.login = (req, res) => {
  passport.authenticate('local', (err, user, message) => {
    if (err) {
      console.log('err ' + message);
      return sendJson(res, 400, err);
    }
    if (!user) {
      console.log('!user ' + message);
      return sendJson(res, 401, message);
    }
    if (user) {
      console.log(user);
      return sendJson(res, 200, message);
    }
  })(req, res);
};

exports.logout = (req, res) => {
  res.logout;
};
