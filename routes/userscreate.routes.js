const express = require('express');
const router = express.Router();
const userController = require('../controller/usersignup.controller');

router.post('/', userController.usersData);

module.exports = router;