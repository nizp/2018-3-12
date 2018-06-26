const http = require('http');
const fs = require('fs');

const filePath = 'public';
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    try{
        let data = fs.readFileSync(filePath+req.url);
        res.write(data.toString());
        res.end();
    }catch(error){
        let data = fs.readFileSync(filePath+'/404.html');
        res.write(data.toString());
        res.end();
    }
    console.log(req.url); // /index.html
}).listen(80);