const express = require('express');
const router = express.Router();

const { getTodos } = require('./controllers/index');
const postUser = require('./controllers/auth/Register');
const postAuth = require('./controllers/auth/Login');
router.get('/todos', getTodos);
router.post('/user', postUser);
router.post('/auth', postAuth);
module.exports = router;
