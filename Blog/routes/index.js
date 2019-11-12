var express = require('express');
var router = express.Router();
const fs=require("fs");
const path=require("path");
var filepath=path.join(__dirname,"data.json");
var content=fs.readFileSync(filepath);
// console.log(content);
content=JSON.parse(content);
// console.log(content);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/list',function(req,res,next){
    console.log(req);
    var u=req.body;
    if(u.username==content.users[0].username&&u.pwd==content.users[0].password){
        res.end("success");
    }else{
      res.end("error");
    }
});
router.get('/list/add',function(req,res,next){
  res.render('list');
});


module.exports = router;
