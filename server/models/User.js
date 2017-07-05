const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
const secret = process.env.SECRET;
/* Mongoose: mpromise (mongoose's default promise library) is deprecated,
plug in your own promise library instead:
http://mongoosejs.com/docs/promises.html */
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid email address.'],
      required: 'Please enter an email.'
    },
    username: {
      type: String,
      trim: true,
      required: 'Please enter a username.'
    }
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function() {
  const today = new Date();
  const expiry = new Date(today);
  expiry.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id, // exists natively for every document in mongoose,
      username: this.username,
      expiry: parseInt(expiry.getTime() / 1000)
    },
    secret
  );
};

userSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT()
  };
};

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
