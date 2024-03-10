// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();


router.get("/", (req,res) =>{
    res.json("Welcome to my paytm app");
} )
 
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router; 