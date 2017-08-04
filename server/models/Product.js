const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const Schema = mongoose.Schema;
/* Mongoose: mpromise (mongoose's default promise library) is deprecated,
plug in your own promise library instead:
http://mongoosejs.com/docs/promises.html */
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please give the product a name.'
  },
  description: {
    type: String,
    trim: true
  },
  slug: String,
  category: {
    type: String,
    trim: true
  },
  imageSrc: String
});
