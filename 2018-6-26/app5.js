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
let d = '';
const server = http.createServer((req,res)=>{

    let json = {code:3,msg:'错误'};
    if(req.url === '/user'){ //接口
        //开始接收数据
        req.on('data',(data)=>{
            d += data.toString();
        });

        //接收数据完毕
        req.on('end',()=>{
            
            let arr = d.split('&');
            let obj = {}
            arr.forEach(e=>{
                let s = e.split('=');
                obj[s[0]] = s[1];
            });
        
            let oo = mysql.find(e=>{
                return e.user == decodeURI(obj.user);
            });
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

            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
            res.write(JSON.stringify(json));
            res.end();


        });


    }else{
        //静态文件
        try {
            if(req.url === '/')req.url='/index.html';
            const data = fs.readFileSync(filePath+req.url);
            res.write(data.toString());
            res.end();
        } catch (error) {
            const data = fs.readFileSync(filePath+'/404.html');
            res.write(data.toString());
            res.end();
        }
    }   
});

server.listen(80);
