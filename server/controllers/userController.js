const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const sendJson = require('../handlers/sendJson');

exports.showUser = (req, res) => {
  res.json({ msg: 'HELLO' });
};

exports.validateSignup = (req, res, next) => {
  console.log(req.body);
  // let body = Object.assign({}, req.body);

  req.sanitizeBody('username');
  req.checkBody('username', 'Please enter a username.').notEmpty();
  req.checkBody('email', `That email isn't valid.`).isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank').notEmpty();
  req
    .checkBody('passwordConf', 'Confirmed password cannot be blank')
    .notEmpty();
  req
    .checkBody('passwordConf', "Your passwords don't match.")
    .equals(req.body.password);

  // console.log(req.body);

  const errors = req.validationErrors();
  if (errors) {
    console.log('There were errors');
    console.log(errors);
    sendJson(res, 400, errors);
  }
  // console.log(req.body);
  next();
};

exports.createUser = (req, res) => {
  const { email, name } = req.body;

  const user = new User({ email, name });
  console.log(`User ready for creation`);
};
