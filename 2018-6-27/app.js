const express = require('express');

const app = express();

/*
    拿post的数据
*/
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);


//引入静态资源
app.use(express.static('view'));



/*
    req.query  去查看查询信息 -> 返回一个对象

    app.get('/') 走get接口

    如果走的是后端路由，要use别get router

*/
app.use('/user',require('./routers/user'));

app.listen(80);
