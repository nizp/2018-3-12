const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// //引cookie
// const cookieParase = require('cookie-parser');
// //添加中间件
// app.use(cookieParase());

// app.use('/',function(req,res,next){
//     // console.log(123)
//     // res.cookie('user','xq')
//     // console.log(req.cookies);
//     console.log(res.cookie);
//     next();
// });



app.use('/user',require('./routers/user'));
app.use('/search',require('./routers/search'));

app.use(express.static('view'));
mongoose.connect("mongodb://127.0.0.1:27017")

mongoose.connection.on('open',function(){
    console.log('链接成功')
    app.listen(80);
});


