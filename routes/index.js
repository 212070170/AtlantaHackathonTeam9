var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();
/* GET index page. */

router.use(function(req,res,next){
//  console.log('index.html from router - index.js');
  next();
});

router.get('/', function(req, res, next) {
//  res.sendFile('index.html');
    next();
});

router.get('*', function(req, res, next) {
    console.log("HERE");
//    res.sendFile(path.join(__dirname + '/../public/index.html'));
    next();
});

//router.get('/new', function(req, res, next) {
//    res.sendFile(path.join(__dirname + '/../public/index_new.html'));
//});
//router.get('/new_2', function(req, res, next) {
//    res.sendFile(path.join(__dirname + '/../public/index_new_2.html'));
//});
//
////router.get('/smart', function(req, res, next) {
//////    console.log(req.params.pass);
////    res.sendFile(path.join(__dirname + '/../public/smartTriage.html'));
////});
//
//router.get('/smart/:id', function(req, res, next) {
////    console.log(req.params.pass);
//    var id = req.params.id;
//    if(id == '123987'){
//        res.sendFile(path.join(__dirname + '/../public/smartTriage.html'),{},function(err){
//            if (err) {
//                console.log(err);
//                res.status(err.status).end();
//            }
//            else {
////            console.log('Sent:', fileName, __dirname);
//            }
//        });
//    }else{
//        console.log("Not Authorized!");
//    }
//
////    res.send('user ' + req.params.id);
//
//});
module.exports = router;
