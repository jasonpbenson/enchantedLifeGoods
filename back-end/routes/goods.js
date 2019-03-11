var express = require('express');
var router = express.Router();
const db = require('../database');

router.get('/', (req, res)=> {
    const productQuery = `SELECT * FROM goods WHERE ceramic = true`
    db.query(productQuery).then((results)=> {
        res.json(results);
        console.log(results);
    }).catch ((error)=> {
        if(error) {throw error}
    })
})

router.get('/:gid', (req, res)=> {
    const gid = req.params.gid;
    const selectQuery = `SELECT * FROM goods WHERE id = $1`;
    db.query(selectQuery, [pid]).then((productData)=> {
        res.json(productData);
    }).catch((error)=> {
        if(error){throw error};
    })
})

module.exports = router;