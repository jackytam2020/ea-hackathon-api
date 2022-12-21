require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const connectDB = require('./confiq/db');

const imagesRoutes = require('./routes/imagesRoute');
const faqRoutes = require('./routes/faqRoute');

connectDB();

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

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

console.log(
  JSON.stringify([
    {
      question: 'What will happen to my current games and content?',
      response:
        'All the current games and content will transfer over to the newly downloaded app',
    },
    {
      question: 'What will happen to my in-game hours and achievements?',
      response:
        'Any game that lists in-game hours or achievements will be carried over to the EA app. Head to a game page in the EA app to view your achievements and time spent in that game!',
    },
    {
      question: 'What will happen to my Origin friends list?',
      response:
        'Your Origin friends list automatically transfers over once you log in to the EA app, so you don’t have to worry about remembering all those player IDs.',
    },
    {
      question: 'How do in-game purchases transfer over?',
      response:
        'Your in-game purchases will also carry over when you log in to the EA app.',
    },
    {
      question: 'How do I start playing games?',
      response:
        'Sign into the EA App using your current Origin credentials to continue playing your favourite games.',
    },
  ])
);
