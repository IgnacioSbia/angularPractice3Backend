const express = require("express");
const routes = express.Router();
const {verifyToken} = require('../middlewares/authUser');
const { regUser } = require("../Controllers/angularPageControllers");



//registerUser
routes.post('/register', regUser);




module.exports = routes;