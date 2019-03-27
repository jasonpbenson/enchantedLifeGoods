var express = require('express');
var router = express.Router();
const db = require('../database');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');

router.post('/register', (req, res)=> {
  const checkemailQuery = `SELECT * FROM users WHERE email = $1`
  db.query(checkemailQuery, [req.body.email]).then((results)=> {
    // console.log(results);
    if(results.length === 0){
      // user doesn't exist
      const insertUserQuery = `INSERT INTO users (name, email, password, token) VALUES ($1, $2, $3, $4);`;
      const token = randToken.uid(50);
      const hash = bcrypt.hashSync(req.body.password);
      console.log(hash)
      db.query(insertUserQuery, [req.body.name, req.body.email, hash, token,]).then(()=> {
        res.json({
          msg: "userAdded",
          token,
          name: req.body.name
        });
      })
    }else{
      // user does exist
      res.json({msg: "userExists"});
    }
  }).catch((error)=> {
    if(error){throw error};
  })
})

router.post('/login',(req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
  
  const selectUserQuery = `SELECT * FROM users WHERE email = $1`;
  db.query(selectUserQuery,[email]).then((results)=>{
    if(results.length === 0){
      res.json({
        msg: "badUser"
      })
    }else{    
      const checkHash = bcrypt.compareSync(password, results[0].password)
      if(checkHash){
        const token = randToken.uid(50);
        const updateTokenQuery = `UPDATE users SET token = $1 
          WHERE email = $2`;
        db.query(updateTokenQuery,[token,email]).catch((error)=>{
          if (error){throw error};
        });
        res.json({
          msg: "userLoginSuccess",
          token,
          email,
        })
      }else{
        res.json({
          msg: "badPassword"
        })
      }
    }
  }).catch((error)=>{
    if(error){throw error}
  })
})

module.exports = router;
