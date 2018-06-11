const express = require('express');
let bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));

//静态文件托管
app.use('/', express.static('./www'));
app.use('/public', express.static('./public'));

//路由
app.use('/api', require('./routers/api'));
app.use('/admin', require('./routers/admin'));
// app.use('/', require('./routers/main'));

mongoose.connect('mongodb://127.0.0.1:27017',{useMongoClient:true}, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('已成功连接到数据库');
    app.listen(88, () => {
      console.log('server running at 127.0.0.1:2777');
    });
  }
});