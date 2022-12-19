require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;

pp.use(express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  })
);
