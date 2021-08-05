const express = require('express');
const router = express.Router();
const cityController = require('../controller/createcitydata.controller');

router.post('/', cityController.collectionOfCity);

module.exports = router;