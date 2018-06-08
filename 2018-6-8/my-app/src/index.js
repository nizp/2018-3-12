import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
// import App from './ChildToParent/App/app';
// import App from './router/router1/app';
// import App from './router/router2/app';
// import App from './router/router4/app';
// import App from './router/router5/app';
// import App from './router/router6/app';
// import App from './router/router7/app';
// import App from './router/router8/app';
import App from './shengming';
ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
