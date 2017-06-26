const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJson = require('../handlers/sendJson');

exports.login = (req, res) => {
  passport.authenticate('local');
  sendJson(res, 200, req.body);
};

exports.logout = (req, res) => {
  res.logout;
};
