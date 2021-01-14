const express = require('express');
const app = express();
const router = require('./router');
require('./lib/cronjob');
app.use(express.json());
// TODO USE UUID INSTEAD OF ID
app.use('/api/v1', router);

module.exports = app;
