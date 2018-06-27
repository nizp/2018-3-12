const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer  = require('multer'); //上传文件
app.use(bodyParser.urlencoded({ extended: false }));

/*
    dest:把上传的文件放到哪个目录下
    file: 字段
*/
app.use(multer({ dest: '/upload/'}).array('file'));

/*
    默认走view的静态文件
        如果要配置到view的路径
        express.static('/src','view')
*/
app.use(express.static('view'));

app.use('/upload',require('./routers/upload'));

app.listen(80);


