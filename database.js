//import mysql database
var mysql = require('mysql');

//create connection to mysql
var con = mysql.createConnection({
  host: "database-2.c5ocoax9a06y.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "adminadmin",
  database:"uniondb"
});

//connecting mysql database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = con;