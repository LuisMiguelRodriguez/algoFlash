const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const questions = require('../database/questions');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(pino);


// Routes
// =============================================================
app.use('/api', apiRoutes);

app.get('/api/questions', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(questions);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);