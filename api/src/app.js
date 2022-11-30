const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./router');
require('./lib/cronjob');

const corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(express.json());

app.use('/api/v1', cors(corsOptions), router);

module.exports = app;
