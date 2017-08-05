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
    validate: [ validator.isAscii, 'Illegal characters in product name' ],
    required: 'Please give the product a name.'
  },
  description: {
    type: String,
    validate: [ validator.isAscii, 'Illegal characters in store description' ],
    trim: true
  },
  slug: String,
  category: {
    type: String,
    trim: true
  },
  imageSrc: String
});

productSchema.index({
  name: 'text',
  description: 'text'
});

productSchema.pre('save', async function(next) {
  /* When updating an entry in the product table, this will only be called if 
  the  name is modified. */
  if (!this.isModified('name')) {
    return next();
  }

  // Enforce 60 character limit
  this.name = this.name.split('').slice(0, 39);

  // Generate slug
  this.slug = slug(this.name);

  // Handle slugs with potentially identical names
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');

  // this.constructor? Because you can't reference Store before it's created
  const productsWithSlug = await this.constructor.find({ slug: slugRegEx });

  if (productsWithSlug.length) {
    this.slug = `${this.slug}-${productsWithSlug.length + 1}`;
  }

  next();
});
