//import mysql database
var mysql = require('mysql');

//create connection to mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"union"
});

//connecting mysql database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = con;