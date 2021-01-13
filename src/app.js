const express = require('express');
const app = express();

const router = require('./router');

app.use('/api/v1', router);

module.exports = app;
