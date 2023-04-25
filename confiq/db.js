const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
