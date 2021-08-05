const express = require('express');
const router = express.Router();

const cityRoute = require('./citypost.routes');
const userRoute = require('./userscreate.routes');
const getCityRoute = require('./getcity.route');
const getUserRoute = require('./getallusers.route');
const getPopulateusers = require('./popugetusers.route');
const loginroute = require('./userlogin.route');
const userById = require('./userbyid.route');
const todosroute = require('./todo.route');
const getTodosRoute = require('./gettodo.route');
const allToDoEs = require('./alltodos.route');

router.use('/cities', cityRoute);
router.use('/users', userRoute);
router.use('/getusers', getUserRoute);
router.use('/getcities', getCityRoute);
router.use('/usercities', getPopulateusers);
router.use('/login', loginroute);
router.use('/byId', userById);
router.use('/todos', todosroute);
router.use('/getTodos', getTodosRoute);
router.use('/allTodos', allToDoEs);


module.exports = router;