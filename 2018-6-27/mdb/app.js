//引入mongoose
const mongoose = require('mongoose'); 

//链接mongoose
mongoose.connect('mongodb://127.0.0.1:27017');

/*
    在open中看下成功不成功
*/
const db = mongoose.connection;

db.once('open',()=>{
    console.log('数据库连接成功！');
    //猫类
    const Cat = mongoose.model('Cat', { name: String });

    //kitty猫
    const kitty = new Cat({ name: 'shenshen' });

    kitty.save().then(() => console.log('meow'));

});

