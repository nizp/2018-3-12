import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './ChildToParent/App/app';
import App from './ChildToParent/App2/app';

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
