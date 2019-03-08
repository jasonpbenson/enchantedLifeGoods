let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
const expressSession = require('express-session');
const fs = require("fs");
const multer  = require("multer")
const upload = multer({ dest: "public/" })

const config = require("../config");

let mysql = require('mysql');
let connection = mysql.createConnection(config.db);
connection.connect();

router.post("/formSubmit", upload.single("imageToUpload"), (req, res) => {
  res.json(req.file);
  const tempPath = req.file.path;
  const targetPath = `public/${req.file.originalname}`
  fs.readFile(tempPath, (error, fileContents) => {
      if(error){throw error};
      fs.writeFile(targetPath, fileContents, (error2) => {
          if(error2){throw error2};
          const insertQuery = `INSERT INTO goods (id, title, description, price, image1, image2, image3, image4, available)
              VALUES
          (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?;`;
          connection.query(insertQuery, 
              [req.body.title, req.file.originalname], 
              (dbError, dbResults) =>{
              if(dbError){
                  throw dbError;
              }else{
                  fs.unlink(tempPath);
                  res.redirect("/admin");
              }
          })
      });
  });
});
module.exports = router;
