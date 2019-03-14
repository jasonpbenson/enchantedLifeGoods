var express = require('express');
var router = express.Router();
const db = require('../database');

const fs = require("fs");
const multer  = require("multer")
const upload = multer({ dest: "public/" })

router.post("/", upload.array('files', 4), (req, res) => {
  // res.json(req.file);
  // res.json(req.body);
  const promiseArray = req.files.map((file)=>{
    return new Promise((resolve, reject)=>{
      const tempPath = file.path;
      const targetPath = `public/images/db_images/${file.originalname}`
      fs.readFile(tempPath, (error, fileContents) => {
        if(error){throw error};
        fs.writeFile(targetPath, fileContents, (error2) => {
          if(error2){throw error2};
          fs.unlink(tempPath, ()=>{});
          resolve(targetPath)
        })
      })
    })
  });

  Promise.all(promiseArray).then((fileNames)=>{
    console.log(fileNames)
    const insertQuery = `INSERT INTO goods (title, description, price, image1, image2, image3, image4)
      VALUES
    ($1, $2, $3, $4, $5, $6, $7)`;
    db.query(insertQuery, 
      [req.body.title, req.body.description, req.body.price, fileNames[0],fileNames[1],fileNames[2],fileNames[3],]).then(()=> {
        res.json({
          msg: "itemAdded"
        })
      })
  })
})

router.get("/", (req, res)=> {
  const checkUserCred = `SELECT * FROM users WHERE id = $1`
  db.query(checkUserCred, [req.body.id]).then((results)=> {
    if(req.body.admin = false || req.body.admin.length === 0){
      res.json({msg: "invalidUser"})
    }else{
      res.json({msg: "adminUser"})
    }
  }).catch((error)=> {
    if(error){throw error};
  })
})

module.exports = router;