const express = require('express');
const router = express.Router();
const getUserByIdController = require('../controller/getuserbyid.controller');

router.get('/', getUserByIdController.getUserById);
 
module.exports = router;