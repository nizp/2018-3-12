var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('user','xq');
  res.render('index',{"title":'你好'});
});

module.exports = router;
