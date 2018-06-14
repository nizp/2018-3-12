import {combineReducers} from 'redux';

//水果
const sg = [
    {name:'苹果',price:8.8,id:0},
    {name:'梨',price:18.8,id:1},
    {name:'榴莲',price:26.8,id:2},
    {name:'西瓜',price:16.8,id:3}
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
    {name:'苹果',price:99.9,id:0},
    {name:'小米',price:9999,id:1},
    {name:'联想',price:8888.8,id:2},
    {name:'宏碁',price:666,id:3}
];
const reducer2 = (state = dn, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

const reducer3 = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GWC':
            console.log(action.data)
            return [...state,action.data];
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