const express = require('express');
const UserController = require('../controller/UserController')

const UserRouter = express.Router();

UserRouter.get('/get/:id', UserController.getUser)

UserRouter.post('/add', UserController.addUser)

module.exports = UserRouter