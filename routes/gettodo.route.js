const todosController = require('../controller/todosget.controller');
const express = require('express');
const router = express.Router();

router.get('/', todosController.getToDoEs);

module.exports = router;
