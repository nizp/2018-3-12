import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //异步请求就用thunk
import App from './redux1';

const reducer = (state=1,action) => {
    switch(action.type){
        case "ADD_NUM_ASYNC":
            console.log(action.num);
            return state + action.num;
        case "ADD_NUM":
            return state += 1;
        case "MINUS_NUM":
            return state -= 1;
        default:
            return state;
    }
}


const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(render);

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
 
