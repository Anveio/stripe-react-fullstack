const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const { sendJson, getTokenFromHeader } = require('../handlers/util');

// See http://passportjs.org/docs#custom-callback
exports.login = (req, res) => {
  return passport.authenticate(
    'local',
    { session: false },
    (err, user, message) => {
      if (err) {
        return sendJson(res, 500, err);
      }
      if (!user) {
        return sendJson(res, 403, {
          message: 'Password and/or email are incorrect.'
        });
      }
      if (user) {
        return sendJson(res, 200, { token: user.generateJWT() });
      }
    }
  )(req, res);
};

exports.authenticateJwt = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  getToken: getTokenFromHeader
});

exports.emailFromJwt = (req, res) => {
  const { token } = req.body;

  if (token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    sendJson(res, 200, { email: payload.username });
  } else {
    sendJson(res, 401, { message: 'Authorization failed.' });
  }
};
