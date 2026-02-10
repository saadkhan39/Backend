const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const authRouter = express.Router()

//register api 
authRouter.post("/register",async(req,res)=>{
    const {name,email,password}= req.body

   const isUserAlreadyExists = await userModel.findOne({email})
   if(isUserAlreadyExists){
    res.status(409).json({
        message:"user already exists eith this email address"
    })
   } 

   const hash = crypto.createHash("md5").update(password).digest("hex")

  const user = await userModel.create({
    name,email,password:hash
  })
  const token =jwt.sign({
    id:user._id,
    email:user.email
   },process.env.JWT_SECRET
)
  res.cookie("jwt_token",token)

   res.status(201).json({
        message:"user registered successsfully",
        user,
        token
    })



})


//login api
authRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

    const user = await userModel.findOne({email})
    if(!user){
        res.status(400).json({
            message:"user not found with this email address"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")
    if(!isPasswordMatched){
       res.status(401).json({
        message:"invalid password"
       })
    }

     const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
    message:"user logged in successfully",
    user
   })

   
})

   



module.exports =authRouter