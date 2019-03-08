let express = require('express');
let router = express.Router();

const randToken = require('rand-token');
const expressSession = require('express-session');

const config = require("../config");

let mysql = require('mysql');
let connection = mysql.createConnection(config.db);
connection.connect();

module.exports = router;