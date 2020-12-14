var express = require('express');
var router = express.Router();
var db=require('../database');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

//TO dispaly main student union page
router.get('/index', function(req, res, next) { 
res.render('index'); 
});

//TO get Enroll form page
router.get('/enroll', function(req, res, next) { 
    res.render('enroll');
});

//To insert use information from  enroll form
router.post('/enroll', urlencodedParser, function (req, res) {
  values = {
      Student_ID: req.body.Student_ID,
      First_name: req.body.First_name,
      Last_name: req.body.Last_name,
      Age: req.body.Age,
      Email: req.body.Email,
      Phone: req.body.Phone
  };
    var sql = "INSERT INTO students SET ?";
    db.query(sql, [values],function (err, data) {
     if (err) throw err;
          console.log("record inserted");
      });
    console.log(values);
    //res.json({ message: "Thank for Enroll" })
 // res.end(JSON.stringify(values));
    res.redirect('/users/user-list');
})


// To display the list union member 
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM students';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

/// TO update the union member details
router.get('/edit/:id', function(req, res, next) {
    var UserId= req.params.id;
    var sql=`SELECT * FROM students WHERE id=${UserId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      res.render('enroll', { title: 'User List', editData: data[0]});
    });
});


router.post('/edit/:id', urlencodedParser, function(req, res, next) {
    var id= req.params.id;
      var updateData= req.body;
      var sql = `UPDATE students SET ? WHERE id= ?`;
      db.query(sql, [updateData, id], function (err, data) {
      if (err) throw err;
     // res.render('users', { editData:data});
      console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/users/user-list');
});

///
router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM students WHERE id = ?";
    db.query(sql, [id], function(err, data) {
        if(err) throw err;
        res.redirect('/users/user-list');
        console.log(data.affectedRows + " record(s) updated");

    })
})

module.exports = router;