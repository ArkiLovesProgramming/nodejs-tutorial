const express = require('express');

const router = express.Router();

router.get("/home2", (req, res)=>{
    res.send("home")
})

router.get("/cart2", (req, res)=>{
    res.send("cart")
})

module.exports = router