const express = require("express")
const authController = require("../controllers/auth.controllers")


const authRouter = express.Router()


//register api for registering user
authRouter.post("/register", authController.registerController)

//login api for login user
authRouter.post("/login",authController.loginController)

module.exports = authRouter