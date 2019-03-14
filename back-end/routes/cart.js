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
            // const getCartContent = `SELECT * FROM goods
            //     WHERE goods.id = cart.gid`
            db.query(getCartTotals, [uid]).then((results)=> {
                const totals = `SELECT SUM(price) AS totalPrice
                    FROM cart
                    INNER JOIN goods on goods.id = cart.gid
                    WHERE uid = $1`;
                db.query(totals, [uid]).then((totalNumbers)=> {
                    console.log("=======================")
                    const total = totalNumbers[0].totalprice;
                    console.log(totalNumbers[0].totalprice)
                    const responseData = {
                        contents: results,
                        total,
                    }
                    res.json(responseData);
                    // console.log(responseData);
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



router.post("/updateAddress", (req, res)=> {
    const checkAddressQuery = `SELECT address1 FROM users WHERE token = $1`
    db.query(checkAddressQuery, [req.body.token]).then((results)=> {
        if(results.length === 0){
            res.json({msg: "login"});
        }else{
            const updateAddressQuery = `UPDATE users SET address1=$1, address2=$2, city=$3, state=$4, zip=$5 WHERE token = $6`
            db.query(updateAddressQuery, [req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zip, req.body.token]).then(()=> {
            res.json({msg: "addressUpdated"});
        })        }
    })
})

router.post("/getAddress", (req, res)=> {
    const getAddressQuery = `SELECT address1, address2, city, state, zip FROM users WHERE token = $1`
    console.log(req.body.token)
    db.query(getAddressQuery, [req.body.token]).then((results)=> {
        res.json(results)
    })
})

router.post("/confirmOrder", (req, res)=> {
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
                const moveCartToSales = `INSERT INTO sales (id, uid, gid)
                    VALUES
                    (DEFAULT, $1, $2)`
                db.query(moveCartToSales, [uid]).then(()=> {
                    const removeFromCart = `DELETE * FROM cart WHERE uid = $1 `
                    db.query(removeFromCart, [uid]).then((results)=> {
                        res.json(results)
                    }).catch((error)=>{
                        if(error){throw error};
                    }) 
                })  
            }).catch((error)=>{
                if(error){throw error};
            }) 
        }
    })
})

module.exports = router;