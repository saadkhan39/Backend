const express = require("express")
const identifyUser = require("../middleware/auth.middleware")
const userController = require("../controllers/user.controller")

const userRouter = express.Router()

//   /api/user/follow/:username

userRouter.post("/follow/:username",identifyUser,userController.followUserController)


//     /api/user/unfollow/:username

userRouter.post("/unfollow/:username",identifyUser ,userController.unfollowUserController)






module.exports = userRouter
