const express = require('express');
const router = express.Router();
const cityController = require('../controller/city.controller');

router.post('/', cityController.collectionOfCity);

module.exports = router;