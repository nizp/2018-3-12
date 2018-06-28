const mongoose = require("mongoose");

const Person = new mongoose.Schema({
    name:String,
    pass:String,
    age:Number,
    sex:String
});

Person.static('findSearch',function(name,cb){
    this.find(name,cb);
});

module.exports = Person;
