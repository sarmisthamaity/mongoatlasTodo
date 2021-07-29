const express = require('express');
const router = express.Router();

const getCityController = require('../controller/getcities.controller');

router.get('/', getCityController.getNumberOfCities);

module.exports = router;