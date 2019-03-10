var express = require('express');
var router = express.Router();
const db = require('../database');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');

const fs = require("fs");
const multer  = require("multer")
const upload = multer({ dest: "public/" })

router.post('/register', (req, res)=> {
  const checkemailQuery = `SELECT * FROM users WHERE email = $1`
  
  db.query(checkemailQuery, [req.body.email]).then((results)=> {
    // console.log(results);
    if(results.length === 0){
      // user doesn't exist
      const insertUserQuery = `INSERT INTO users (name, email, password, token) VALUES ($1, $2, $3, $4);`;
      const token = randToken.uid(50);
      const hash = bcrypt.hashSync(req.body.password);
      db.query(insertUserQuery, [req.body.name, req.body.email, token, hash,]).then(()=> {
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
          msg: "loginSuccess",
          token,
          email
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

router.post("/admin", upload.array("image", 4), (req, res) => {
  res.json(req.file);
  res.json(req.body);
  const tempPath = req.file.path;
  const targetPath = `public/${req.file.originalname}`
  fs.readFile(tempPath, (error, fileContents) => {
    if(error){throw error};
    fs.writeFile(targetPath, fileContents, (error2) => {
      if(error2){throw error2};
      const insertQuery = `INSERT INTO goods (title, description, price, image1, image2, image3, image4)
          VALUES
      ($1, $2, $3, $4, $5, $6, $7)`;
      db.query(insertQuery, 
          [req.body.title, req.body.description, req.body.price, req.file.originalname, req.file.originalname, req.file.originalname, req.file.originalname].then(()=> {
          fs.unlink(tempPath);
          res.json({
            msg: "itemAdded"
          });
        })
      )  
      })
    });
  });

module.exports = router;
