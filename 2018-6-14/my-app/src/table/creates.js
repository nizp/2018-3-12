import {combineReducers} from 'redux';
const ADD_DATA = 'ADD_DATA';
const UP_MOVE = 'UP_MOVE';
const DOWN_MOVE = 'DOWN_MOVE';
const CHANGE_CHECKED = 'CHANGE_CHECKED';

let initState = [
    {
        'id': 1,
        'name': 'momo',
        'price': 36,
        'checked': false
    },
    {
        'id': 2,
        'name': '小恋',
        'price': 40,
        'checked': false
    },
    {
        'id': 3,
        'name': 'yaya',
        'price': 20,
        'checked': false
    },
    {
        'id': 4,
        'name': 'feifei',
        'price': 10,
        'checked': false
    },
    {
        'id': 5,
        'name': 'hhehe',
        'price': 35,
        'checked': true
    }
];
const reduers1 = (state=initState,action) => {
    switch(action.type){
        case ADD_DATA:
            return [...state,action.data];
        case UP_MOVE:
            let newState = Object.assign([],state);
            let index = newState.findIndex((e)=>e.id === action.id);
            if(index === 0) return state;
            let now = newState.splice(index,1)[0];
            // let up = newState.slice(index-1,1)[0];
            newState.splice(index-1,0,now);
            return newState;
     
        case DOWN_MOVE:
            let newState2 = Object.assign([],state);
            let index2 = newState2.findIndex((e)=>e.id === action.id);
            let now2 = newState2.splice(index2,1)[0];
            // let up = newState.slice(index-1,1)[0];
            newState2.splice(index2+1,0,now2);
            return newState2;

        case CHANGE_CHECKED :
            let newState3 = [...state];
            newState3.forEach(e=>{
                if(e.id === action.id){
                    e.checked = !e.checked
                }
            });
            return newState3;
        case "CHANGE_ALL" :
            return state.map(e=>{
                e.checked = action.checked;
                return e;
            });
        case "REMOVE":
            return state.filter(e=>!e.checked);
        
        case "SORT_DATA" :
            let v1 = action.val.v1;
            let v2 = action.val.v2;
            let arr = [...state];
            if(v2 === '2'){ //从高到低
                arr.sort((a,b)=>b[v1] - a[v1]);
            }else if(v2 === '1'){
                arr.sort((a,b)=>a[v1] - b[v1]);
            }
            return arr;
        
        case "DELE":
            return state.filter(e=>e.id != action.id);
        default :
            return state;
    }
}
const reduers2 = (state=0,action) => {
    return state;
}
const reducers = combineReducers({
    reduers1,
    reduers2
});

export {reducers}