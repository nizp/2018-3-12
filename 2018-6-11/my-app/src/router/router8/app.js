import React from 'react';
import {Route} from 'react-router-dom';
import {renderComponent} from './routers';
import Index from './index';
import About from './about';
import AboutA from './aboutA';
let routes = [
    {
        path:'/',
        component:Index,
        exact:true
    },
    {
        path:'/about',
        component:About,
        exact:true,
        childs:[
            {
                path:'/a',
                component:AboutA,
            }
        ]
    }
]; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        console.log(renderComponent(routes))
        return (
            <div>
                <div>都是页面</div>
                {renderComponent(routes)}
            </div>
        )
    }
}

export default App;