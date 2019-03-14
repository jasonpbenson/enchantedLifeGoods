var express = require('express');
var router = express.Router();
const db = require('../database');

router.post("/getSales", (req, res)=> {
    const token = req.body.token;
    const userOrderQuery = `SELECT id FROM users WHERE token = $1`
    db.query(userOrderQuery, [token]).then((results)=> {
        if(results.length === 0){
            res.json({
                msg: "badToken"
            })
        }else{
            const uid = results[0].id;
            const getUserSales = `SELECT * FROM sales
                INNER JOIN goods.id = sales.gid
                WHERE uid = $1`
            db.query(getUserSales, [uid]).then((userSales)=>{
                const responseData = {
                    contents: userSales
                }
                res.json(responseData);
            }).catch((error)=>{
                if(error){throw error}
            })
        }
    }).catch((error)=>{
        if(error){throw error}
    })
})

module.exports = router;
