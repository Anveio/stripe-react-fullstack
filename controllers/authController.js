const passport = require('passport');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const { sendJson, getTokenFromHeader } = require('../handlers/util');

// See http://passportjs.org/docs#custom-callback
exports.login = (req, res) => {
  return passport.authenticate('local', { session: false }, (err, user) => {
    if (err) {
      return sendJson(res, 500, err);
    }
    if (!user) {
      return sendJson(res, 403, {
        message: 'Password and/or email are incorrect.'
      });
    }
    if (user) {
      return sendJson(res, 200, {
        email: user.email,
        token: user.generateJWT()
      });
    }
  })(req, res);
};

exports.decodeJwt = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    sendJson(res, 401, { message: 'No token provided' });
    return;
  }

  // The JWT is signed with the user's email.
  const associatedEmail = jwt.verify(token, process.env.JWT_SECRET, next);
  sendJson(res, 200, { email: associatedEmail.username });
};
