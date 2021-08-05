const getUserController = require('../controller/usercities.controller');

const express = require('express');
const router = express.Router();

router.get('/', getUserController.allUsersData);

module.exports = router;