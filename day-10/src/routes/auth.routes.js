//athentication wali api auth route mein create hongi

const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const authRouter = express.Router()  //agr app.js file ke alawa kisi aur file mein  api create krna hai to uske liye express.router() ka use kreneg

//   /api/auth/register   //

authRouter.post("/register",async(req,res)=>{
    const {name,email,password} =req.body

    const isUserAlreadyExists = await userModel.findOne({email}) 
     

    //user ka email phele se hi registerd hoga tb
    if(isUserAlreadyExists){
        res.status(400).json({
            message:"User already exists with this email address"
        })
    }
  
    const user = await userModel.create({
        name,email,password
    })

    //token create krenge
    const token =jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET
   ) 

   //cookie ka use krenge token ko sever ke andr store krne ke liye
    res.cookie("jwt_token",token)

   res.status(201).json({
    message:"user registered",
    user,
    token
   })

    res.status(201).json({
        message:"user registered successfully",
        user
    })

   

})

//    /api/auth/protected  //
authRouter.post("/protected",(req,res)=>{
   console.log(req.cookies);
   

    res.status(200).json({
        message:"this is protected route"
    })
})

//
module.exports = authRouter
