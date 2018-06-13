import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';

import App from './redux/redux3';

const reducer1 = (state=0,action) => {
    switch(action.type){
        case "ADD":
            return state += action.payload;
        case "MINUS":
            let num = state -= action.payload;
            if(num<0)num=0;
            return num;
        default:
            return state;
    }
}
let arr = [{txt:'呵呵',id:0},{txt:'哈哈',id:1}];

const reducer2 = (state=arr,action) => {
    switch(action.type){
        case "ADD_DATE":
            return [action.add,...state]
        default:
            return state;
    }
}


const reducers = combineReducers({
    r1:reducer1,
    r2:reducer2
});


const store = createStore(reducers);


//监听
// store.subscribe(()=>console.log(store.getState()));
store.subscribe(render);
//只要发起action就会执行subscribe
// store.dispatch({type:"ADD",payload:1});
// store.dispatch({type:"ADD",payload:1});

render();

function render(){
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    )
}




if(module.hot){
    module.hot.accept();
}
 
