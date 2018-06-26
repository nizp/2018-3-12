const http = require('http'),
fs = require('fs');

/*
    /user?act=login&user=肾xx&pass=x肾肾  登录

    /user?act=add&user=肾xx&pass=x肾肾  添加用户
*/
let mysql = [
    {
        user:"lao乔",
        pass:321
    },
    {
        user:"xiao姐姐",
        pass:123
    },
    {
        user:"zhong肾肾",
        pass:213
    }
];
const filePath = 'public';
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    // res.write('{"code":0,"msg":"你好!"}');
    let URL = req.url.split('?');
    let url = URL[0];
    let json = {code:3,msg:'错误'};
    if(url === '/user'){ //接口
        // res.write('{"code":0,"msg":"你好!"}');
        // res.end();
        let arr = URL[1].split('&');
        let obj = {}
        arr.forEach(e=>{
            let s = e.split('=');
            obj[s[0]] = s[1];
        });
        
        let oo = mysql.find(e=>{
            return e.user == decodeURI(obj.user);
        }); //?中文要转码
        switch(obj.act){
            case "add":
                /*
                    添加
                */
                if(oo){
                        json.code = 1;
                        json.msg = '用户已存在';  
                }else{
                        mysql.push({user:decodeURI(obj.user),pass:obj.pass});
                        json.code = 0;
                        json.msg = '注册成功'; 
                        console.log(mysql); 
                }
            break;
            case "login":
                if(oo){
                    if(oo.pass === obj.pass){
                        json.code = 0;
                        json.msg = '登录成功';
                    }else{
                        json.code = 2;
                        json.msg = '用户名或密码错误';
                    }
                }else{
                    json.code = 1;
                    json.msg = '查无此人';
                }
            break;
        }

            res.write(JSON.stringify(json));
            res.end();

    }else{
        //静态文件
        try {
            if(url === '/')url='/index.html';
            const data = fs.readFileSync(filePath+url);
            res.write(data.toString());
            res.end();
        } catch (error) {
            const data = fs.readFileSync(filePath+'/404.html');
            res.write(data.toString());
            res.end();
        }
    }

    res.end();
});

server.listen(80);
