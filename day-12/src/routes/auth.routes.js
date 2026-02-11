const express = require("express")
const authController = require("../controllers/auth.controllers")


const authRouter = express.Router()

//register api with POST method
authRouter.post("/register",authController.registerController)

//login api with POST method
authRouter.post("/login", authController.loginController)

module.exports = authRouter