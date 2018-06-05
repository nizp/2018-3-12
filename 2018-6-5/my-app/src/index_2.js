import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/app';
import PPA from './component/PPA/app';

ReactDOM.render(
    <div>
        <App />
        {/* <PPA /> */}
    </div>
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
