const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJson = require('../handlers/sendJson');

exports.login = function(req, res) {
  passport.authenticate('local');
  sendJson(res, 200, req.body);
};
