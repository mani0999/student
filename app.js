var express = require("express"); 
var app = express(); 
NODE_ENV: process.env.NODE_ENV || 'development';
var path = require("path"); 
const ejs = require("ejs");

//to set view engine
app.set('view engine', 'ejs');
 


//To get router
var usersRouter = require('./routes/users');
app.use('/users',usersRouter);

//local host runing port
app.listen(3306); 
//console.log("Server running at Port 8080"); 
