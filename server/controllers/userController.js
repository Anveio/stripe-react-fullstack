const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const { sendJson } = require('../handlers/util');

exports.validateSignup = (req, res, next) => {
  req.sanitizeBody('username');
  req.checkBody('username', 'Please enter a username.').notEmpty();
  req.checkBody('email', `That email isn't valid.`).isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password must be at least 6 characters').len(6);
  req.checkBody('password', 'Password cannot be blank').notEmpty();

  req
    .checkBody('passwordConf', 'Confirmed password cannot be blank')
    .notEmpty();
  req
    .checkBody('passwordConf', "Your passwords don't match.")
    .equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    return sendJson(res, 422, errors);
  }
  next();
};

exports.createUser = async (req, res, next) => {
  const { email, username } = req.body;

  const user = new User({ email, username });
  const createUserWithPromise = promisify(User.register, User);
  await createUserWithPromise(user, req.body.password);
  next();
};
