import {combineReducers} from 'redux';

//水果
const sg = [
    {name:'苹果',price:8.8,id:0,inventory:1000},
    {name:'梨',price:18.8,id:1,inventory:10},
    {name:'榴莲',price:26.8,id:2,inventory:90},
    {name:'西瓜',price:16.8,id:3,inventory:88}
];
const reducer1 = (state = sg, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

const dn = [
    {name:'苹果',price:99.9,id:4,inventory:5},
    {name:'小米',price:9999,id:5,inventory:10},
    {name:'联想',price:8888.8,id:6,inventory:30},
    {name:'宏碁',price:666,id:7,inventory:80}
];
const reducer2 = (state = dn, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}


/*
   reducer3只做一件事,添加数组
   
    {
       '苹果':0+1,   
    }

    [{'name':'苹果',id:0,num:0,price:10}]
*/

const reducer3 = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GWC':
            let arr = [...state];
            let obj = arr.find(e=>e.id === action.data.id)
            if(obj){
                if(obj.inventory > obj.num){
                    obj.num ++; 
                }
                obj.total = (obj.num * obj.price).toFixed(2)*1;
            }else{
                obj = Object.assign({},action.data);
                obj.num = 1;
                obj.total = obj.price;
                arr.push(obj);
            }

            return arr;
        case 'ADD_NUM':
            // let arr2 = [...state];
            // let obj2 = arr2.find(e=>e.id === action.id);
            // if(obj2.inventory > obj2.num){
            //     obj2.num ++; 
            // }
            // obj2.total = (obj2.num * obj2.price).toFixed(2)*1;
            
            return state.map(e=>{
                if(e.id === action.id){
                    if(e.inventory > e.num){
                        e.num ++;
                        e.total = (e.num * e.price).toFixed(2)*1;
                    }
                }
                return e;
            });

           
        // return arr2;
        case 'MINUS_NUM':

            return state.filter((e,i)=>{
                if(e.id === action.id){
                    e.num--;
                    e.total = (e.num * e.price).toFixed(2)*1;
                }
                return e.num > 0;
            });
            
            // let arr3 = [...state];
            // let obj3 = arr3.find(e=>e.id === action.id)
            // let fIndex = arr3.findIndex(e=>e.id === action.id)
            // obj3.num--;
            // obj3.total = (obj3.num * obj3.price).toFixed(2)*1;
            // if(obj3.num <= 0){
            //     arr3.splice(fIndex,1);
            // }
        // return arr3;

        default:
            return state
    }
}
//把3个reducer合并成一个
const reducers = combineReducers({
    reducer1,
    reducer2,
    reducer3
});

export {reducers};