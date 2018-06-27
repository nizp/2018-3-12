var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test");

const db = mongoose.connection;

const Person = require('./schema/person');

db.once('open',()=>{
    console.log('成功')
    // const xq = new Person({name:"xq",age:18,sex:"女"});
    // const xs = new Person({name:"xs",age:18,sex:"女"});
    // const xss = new Person({name:"xs",age:18,sex:"女"});
    // const xn = new Person({name:"xn",age:18,sex:"男"});
    // const xl = new Person({name:"xl",age:17,sex:"男"});
    // const xjj = new Person({name:"xjj",age:48,sex:"男"});

    // Person.create(
    //     {name:"xq",age:18,sex:"女"},
    //     {name:"xs",age:18,sex:"女"},
    //     {name:"xs",age:18,sex:"女"},
    //     {name:"xn",age:18,sex:"男"},
    //     {name:"xl",age:17,sex:"男"},
    //     {name:"xjj",age:48,sex:"男"}
    // );

    const wjy = new Person({name:"wjy",age:18,sex:"女"});
    wjy.findSex((err,data)=>{
        console.log(data);
    });

    const qiao = new Person({name:"qiao",age:18,sex:"男"});
    qiao.findSex((err,data)=>{
        console.log(data);
    });

    


    // xq.findSex((error,data)=>{
    //     console.log(data);
    // });
    // xq.save(()=>{
    //     console.log('添加完成');
    // });
});