const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const secret = process.env.JWT_SECRET;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid email address.'],
      required: 'Please enter an email.'
    }
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 2 Months

  return jwt.sign(
    {
      id: this._id,
      username: this.email,
      exp: parseInt(exp.getTime() / 1000)
    },
    secret
  );
};

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
