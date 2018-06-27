const express = require('express');
const route = express.Router();

const mysql = [
    {"name":"shikang","age":18},
    {"name":"fangnan","age":3},
    {"name":"付海楠","age":300}
];
const json = {};

route.get('/',(req,res)=>{
    let obj = req.query;
    const oo = mysql.find(e=>e.name == obj.name);
    switch(obj.act){
        case "add":
            if(oo){
                json.code = 1;
                json.msg = '占用';
            }else{
                mysql.push({
                    name:obj.name,
                    age:obj.age
                });
                json.code = 0;
                json.msg = '成功';
            }
        break;
        case "login":

        break;
    }

    res.status(200);
    res.send(JSON.stringify(json));
    // res.json(json);
});

route.post('/',(req,res)=>{
    // console.log(req.body);
    const obj = req.body;
    const oo = mysql.find(e=>e.name == obj.name);
    switch(obj.act){
        case "login":
            if(oo){ 
                if(oo.age == obj.age){
                    json.code = 0;
                    json.msg = '登录成功';
                }else{
                    json.code = 2;
                    json.msg = '用户名或年龄';
                }
            }else{
                json.code = 1;
                json.msg = '没有此用户';
            }
        break;
    }
    res.status(200);
    res.json(json);
})




module.exports = route;