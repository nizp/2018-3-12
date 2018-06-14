import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducers} from './table/creates';
import App from './table/index';


const store = createStore(reducers);
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
 
