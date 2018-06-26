// console.log('hello,world!');
const http = require('http');
const fs = require('fs');

/*
    request:请求   浏览器发给服务器
    response:响应  服务器发给浏览器

    设置请求头：
        Content-Type:text/plain  纯文本
        Content-Type:text/html   超文本
*/
const server =  http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});
    response.write('<h1>你好</h1>');
    response.end();
});
server.listen(80);

