const populateUsers = require('../controller/popusers.controller');
const express = require('express');
const router = express.Router();

router.get('/', populateUsers.userCityDetails);

module.exports = router;