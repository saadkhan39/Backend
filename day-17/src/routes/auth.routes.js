const express = require("express")
const authController = require("../controllers/auth.controllers")
const authRouter = express.Router()


//regsiter api
/*    /api/auth/register      */
authRouter.post("/register",authController.registerController)


//login api
/*    /api/auth/login      */
authRouter.post("/login",authController.loginController)





module.exports = authRouter
