var express = require('express');
var router = express.Router();
const db = require('../database');

const fs = require("fs");
const multer  = require("multer")
const upload = multer({ dest: "public/" })

router.post("/", upload.single('image'), (req, res) => {
  // res.json(req.file);
  // res.json(req.body);
  const tempPath = req.file.path;
  const targetPath = `public/images/db_images/${req.file.originalname}`
  fs.readFile(tempPath, (error, fileContents) => {
    if(error){throw error};
    fs.writeFile(targetPath, fileContents, (error2) => {
      if(error2){throw error2};
      const insertQuery = `INSERT INTO goods (title, description, price, image1)
          VALUES
      ($1, $2, $3, $4)`;
      db.query(insertQuery, 
          [req.body.title, req.body.description, req.body.price, req.file.originalname]).then(()=> {
          fs.unlink(tempPath, ()=>{});
          res.json({
            msg: "itemAdded"
          })
        })
      })
    })
})

router.get("/", (req, res)=> {
  const checkUserCred = `SELECT * FROM users WHERE id = $1`
  db.query(checkUserCred, [req.body.id]).then((results)=> {
    if(req.body.admin = false){
      res.json({msg: "invalidUser"})
    }else{
      res.json({msg: "adminUser"})
    }
  }).catch((error)=> {
    if(error){throw error};
  })
})

module.exports = router;