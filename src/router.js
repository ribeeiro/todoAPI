const express = require('express');
const router = express.Router();
// Middlewares
const { validateJWT } = require('./middlewares');
// Controllers
const { getTodo, postTodo, putTodo, deleteTodo } = require('./controllers/index');
const postUser = require('./controllers/auth/Register');
const postAuth = require('./controllers/auth/Login');

router.get('/todo', validateJWT, getTodo);
router.post('/todo', validateJWT, postTodo);
router.put('/todo/:id', validateJWT, putTodo);
router.delete('/todo/:id', validateJWT, deleteTodo);
router.post('/user', postUser);
router.post('/auth', postAuth);
module.exports = router;
