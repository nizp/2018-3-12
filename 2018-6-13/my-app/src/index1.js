import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// import App from './redux/redux1';
import App from './redux/redux2';

const reducer = (state=0,action) => {
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
const store = createStore(reducer);

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
 
