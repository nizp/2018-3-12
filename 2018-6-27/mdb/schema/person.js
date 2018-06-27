/*
    建模
    
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Person = new Schema({
    name:String,
    age:Number,
    sex:String
});

/*
    find查找所有符合条件的数据
        schema.find(条件,(error,data)=>{})

    findOne查找一条符合条件的数据

    


*/

Person.methods.findSex = function(cb){
    this.model('Pserson').find({sex:this.sex},cb);
}

Person.static('findAge',function(age,cb){
    this.find({age},cb);
});

module.exports = mongoose.model('Pserson',Person);