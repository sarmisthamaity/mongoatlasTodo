const todosAllController = require('../controller/todoes.controller');

const express = require('express');
const router = express.Router();

router.get('/', todosAllController.collectionOfTodos);

module.exports = router;