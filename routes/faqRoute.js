const express = require('express');
const router = express.Router();

const faq = require('../models/faqModel');

router.get('/', (req, res) => {
  faq
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
