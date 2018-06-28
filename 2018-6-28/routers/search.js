const express = require('express');
const router = express.Router();
const Person = require('../model/Person');

/*
    /search?search=name&content=xq
*/

router.get('/',(req,res)=>{
    let obj = req.query;
    if(!obj.content)obj.content = 'xq';

    // console.log(obj.content);

   

    if(obj.search === 'age'){
        if(isNaN(parseFloat(obj.content))){
            let s = obj.content.replace(/\d+/g,'');
            let int = obj.content.replace(/\D+/g,'');
            switch(s){
                case '>=':
                    obj.content = {"$gte":int}
                break;
                case '>':
                    obj.content = {"$gt":int}
                break;
                case '<':
                    obj.content = {"$lt":int}
                break;
                case '<=':
                    obj.content = {"$lte":int}
                break;
                default:
                    obj.content = 0;
                break;
            }
        }else{
            obj.content = parseFloat(obj.content);
        }
    }

    console.log(obj.content);

    Person.findSearch({[obj.search]:obj.content},(err,data)=>{
        if(data.length){
            res.json({code:0,data});
        }else{
            res.json({code:1,data:null});
        }
    });
});

module.exports = router;
