const mongoose = require('mongoose');
const slug = require('slugs');
const validator = require('validator');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    validate: [validator.isAscii, 'Illegal characters in product name'],
    required: 'Please enter a product name.'
  },
  slug: String,
  price: Number,
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  photo: String
});

productSchema.index({
  name: 'text',
  description: 'text'
});

productSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    return next();
  }

  // Enforce 60 character limit
  this.name = this.name.split('').slice(0, 59);

  // Handle slugs with potentially identical names
  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');

  // this.constructor? Because you can't reference Product before it's created
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });

  if (storesWithSlug.length > 0) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }

  next();
});

module.exports = mongoose.model('Product', productSchema);
