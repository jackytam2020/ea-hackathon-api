require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./confiq/db');

const imagesRoutes = require('./routes/imagesRoute');
const faqRoutes = require('./routes/faqRoute');

app.use(express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  })
);

app.use('/images', imagesRoutes);
app.use('/faq', faqRoutes);

connectDB();
