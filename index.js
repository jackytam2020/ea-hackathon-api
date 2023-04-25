const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./confiq/db');

const imagesRoutes = require('./routes/imagesRoute');
const faqRoutes = require('./routes/faqRoute');

app.use(express.static('public'));
app.use(express.json());
dotenv.config();
app.use(cors());
connectDB();

app.use('/images', imagesRoutes);
app.use('/faq', faqRoutes);

//DATABASE CONNECTION SETUP
const PORT = process.env.PORT || 3001;
//connect to MongoDB Schema
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
