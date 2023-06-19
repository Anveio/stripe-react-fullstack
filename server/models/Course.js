const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: {
      unique: true
    }
  },
  name: String,
  description: String,
  price: Number,
  previewUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
