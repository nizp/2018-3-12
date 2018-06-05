import React from 'react';
import ReactDOM from 'react-dom';
import './todolist/css/index.css';
import App from './todolist/Index';

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
