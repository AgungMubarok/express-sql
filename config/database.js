require('dotenv').config()
const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host : process.env.HOST,
//     user : "root",
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE
// });
// gunakan data mysql mu
const connection = mysql.createConnection({
    host: "localhost",
    user: "agungmubarok",
    password: "BoedakCOYE45*",
    database: "netpliks"
})


module.exports = connection;