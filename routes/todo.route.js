const todos = require('../controller/createtodos.controller');
const express = require('express');
const router = express.Router();

router.use('/', todos.createTodosList);

module.exports = router;