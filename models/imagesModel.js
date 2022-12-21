const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  src: {
    type: String,
  },
  videoSrc: {
    type: String,
  },
});

module.exports = mongoose.model('image', imagesSchema, 'images');
