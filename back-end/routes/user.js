var express = require('express');
var router = express.Router();
const db = require('../database');

router.post("/updateUserDb", (req, res)=> {
    const userOrderQuery = `SELECT * FROM goods WHERE goods.id = cart.gid `
})

module.exports = router;
