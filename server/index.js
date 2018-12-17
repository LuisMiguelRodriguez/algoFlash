const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
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

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);