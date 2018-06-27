var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test");

const db = mongoose.connection;

const Person = require('./schema/person');
db.once('open',()=>{
    console.log('链接成功');
    // Person.update({"name":"xq"},{$set:{age:108}});

    //批量操作
    Person.update({"name":"xq"},{age:108},{multi:true});

    //删除
    Person.remove({"name":"xq"},function(error){
        if(error){
            console.log('失败');
        }else{
            console.log('删除');
        }
    });

    //调用静态方法查看17岁
    Person.findAge(17,(err,data)=>{
        console.log(data);
    });


});