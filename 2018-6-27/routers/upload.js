const express = require('express');
const route = express.Router();
const fs = require('fs');

route.post('/',function(req,res){
    //要把文件放到哪里
    let des_file = __dirname + '/upload/' + req.files[0].originalname;
    try {
        //读文件
        let data = fs.readFileSync(req.files[0].path);
        //写文件
        fs.writeFileSync(des_file,data);
        res.json({'code':0,'msg':'成功'});
    } catch (error) {
        res.json({'code':1,'msg':'失败'});
    }
});

module.exports = route;