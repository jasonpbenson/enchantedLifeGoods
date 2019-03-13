var express = require('express');
var router = express.Router();
const db = require('../database');

router.post('/getCart', (req, res)=> {
    const token = req.body.token;
    const getUser = `SELECT id FROM users WHERE token = $1`
    db.query(getUser, [token]).then((results)=> {
        if(results.length === 0){
            res.json({
                msg: "badToken"
            })
        }else{
            const uid = results[0].id;
            const getCartTotals = `SELECT * FROM cart
                INNER JOIN goods on goods.id = cart.gid
                WHERE uid = $1`;
            db.query(getCartTotals, [uid]).then((results)=> {
                const totals = `SELECT SUM(price) as totalPrice, 
                    count(price) as totalItems
                    FROM cart
                    INNER JOIN goods on goods.id = cart.gid
                    WHERE uid = $1`;
                db.query(totals, [uid]).then((totalNumbers)=> {
                    const responseData = {
                        contents: results,
                        total: totalNumbers.totalPrice,
                        items: totalNumbers.totalItems
                    }
                    res.json(responseData);
                })
            }).catch((err)=>{throw err})
        }
    }).catch((error)=> {
        if(error){throw error};
    })
})

router.post('/updateCart', (req, res)=> {
    const token = req.body.token;
    const getUser = `SELECT id FROM users WHERE token = $1`
    db.query(getUser, [token]).then((results)=> {
        if(results.length === 0){
            res.json({
                msg: "badToken"
            })
        }else{
            const uid = results[0].id;
            const itemId = req.body.itemId;
            const addToCartQuery = `INSERT INTO cart (id, uid, gid, date)
                VALUES
                (DEFAULT, $1, $2, NOW())`
            db.query(addToCartQuery, [uid, itemId]).then(()=> {
                const getCartTotals = `SELECT * FROM cart WHERE uid = $1`
                db.query(getCartTotals, [uid]).then((results)=> {
                    res.json(results)
                }).catch((error)=> {
                    if(error){throw error};
                })
            }).catch((error)=> {
                if(error){throw error};
            })
        }
    }).catch((error)=> {
        if(error){throw error};
    })
})

module.exports = router;