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
        const insertQuery = `INSERT INTO goods (title, description, price, image1, image2, image3, image4)
            VALUES
        ($1, $2, $3, $4, $5, $6, $7)`;
        db.query(insertQuery, 
            [req.body.title, req.body.description, req.body.price, req.file.originalname, req.file.originalname, req.file.originalname, req.file.originalname]).then(()=> {
            fs.unlink(tempPath, ()=>{});
            res.json({
              msg: "itemAdded"
            });
          }) 
        })
    });
});

module.exports = router;