const loginController = require('../controller/userlogin.controller');
const express = require('express');
const router = express.Router();

router.get('/', loginController.userLogin);

module.exports = router;
