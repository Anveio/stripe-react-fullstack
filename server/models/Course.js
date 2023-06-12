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
  description: String,
  previewUrl: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
