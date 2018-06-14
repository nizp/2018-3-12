import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reactRedux/reducers';
import App from './reactRedux/index';

const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)


if(module.hot){
    module.hot.accept();
}
 
