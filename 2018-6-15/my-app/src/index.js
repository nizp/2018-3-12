import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reactRedux/reducers';
// import App from './propsType';
import App from './children';
import { BrowserRouter as Router } from 'react-router-dom'


const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)


if(module.hot){
    module.hot.accept();
}
 
