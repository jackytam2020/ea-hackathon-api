const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  response: {
    type: String,
  },
});

module.exports = mongoose.model('faq', faqSchema, 'faq');
