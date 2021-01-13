const express = require('express');
const router = express.Router();
// Middlewares
const { validateJWT } = require('./middlewares');
// Controllers
const { getTodos } = require('./controllers/index');
const postUser = require('./controllers/auth/Register');
const postAuth = require('./controllers/auth/Login');
router.get('/todos', validateJWT, getTodos);
router.post('/user', postUser);
router.post('/auth', postAuth);
module.exports = router;
