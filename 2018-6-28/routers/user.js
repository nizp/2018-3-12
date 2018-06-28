const express = require('express');
const router = express.Router();
const Person = require('../model/Person');

//引cookie
const cookieParase = require('cookie-parser');
//添加中间件

router.use(cookieParase());

/*
    /user

    /user/aaa
*/

// const xq = new Person({name:"xq",pass:"321"});
// xq.save();

// Person.create({name:"xh",pass:'123'});

router.post('/',(req,res)=>{
    const json = {code:3,msg:"错误"}
    const body = req.body;
    let {act,name,pass,age,sex} = body;

    switch(act){
        case 'add':
            if(!name||!pass||!age||!sex){
                res.json(json);
                return;
            };
            Person.findOne({name},(error,data)=>{
                if(data){
                    json.code = 1;
                    json.msg = '用户名已占用';
                    res.json(json);
                }else{
                    Person.create({name,pass,age,sex},(error,data)=>{
                        console.log(data)
                        if(!error){
                            json.code = 0;
                            json.msg = '注册成功!';
                            json.data = {name,age,sex}
                            res.json(json);
                        }
                    });
                }
            });
        break;
        case 'login':
            
            Person.findOne({name},(error,data)=>{
                if(!data){
                    json.code = 1;
                    json.msg = '没有这个人';
                }else{
                    if(data.pass == pass){
                        json.code = 0;
                        json.msg = '登录成功';
                        json.data = name;
                    }else{
                        console.log('密码错误');
                        json.code = 2;
                        json.msg = '用户名或密码错误';
                    }
                }
                res.json(json);
            });
        break;
    }
    
});

// router.post('/aaa',(req,res)=>{
    
// });

module.exports = router;
