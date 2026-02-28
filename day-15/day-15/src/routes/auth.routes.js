const express = require("express")
const authController = require("../controller/auth.controller")

const authRouter = express.Router()

//register api 
/*      /api/auth/router    */
authRouter.post("/register",authController.registerController)

//login api
/*     /api/login/api   */
authRouter.post("/login",authController.loginController)





module.exports = authRouter