const express = require('express');
const router = express.Router();

const { getTodos } = require('./controllers/index');
router.get('/todos', getTodos);
module.exports = router;
