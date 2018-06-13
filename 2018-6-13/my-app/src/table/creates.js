import {combineReducers} from 'redux';
const ADD_DATA = 'ADD_DATA';
const UP_MOVE = 'UP_MOVE';
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
            let index = newState.findIndex((e)=>e.id == action.id);
            if(index == 0) return state;
            let now = newState.splice(index,1)[0];
            // let up = newState.slice(index-1,1)[0];
            newState.splice(index-1,0,now);
            return newState;
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