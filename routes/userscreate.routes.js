const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.post('/', userController.usersData);

module.exports = router;