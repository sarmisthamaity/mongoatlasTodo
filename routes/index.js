const express = require('express');
const router = express.Router();

const cityRoute = require('./citypost.routes');
const userRoute = require('./userscreate.routes');
const getCityRoute = require('./getcity.route');
const getUserRoute = require('./getuser.route');
const mergeData = require('./mergedat.route');


router.use('/cities', cityRoute);
router.use('/users', userRoute);
router.use('/getusers', getUserRoute);
router.use('/getcities', getCityRoute);
router.use('/', mergeData);


module.exports = router;