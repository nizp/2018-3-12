import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {renderComponent} from './routers';
import Login from '../login';
import Index from '../index';
/*
 "proxy": {
    "/api/": {
      "target": "http://localhost:88/api",
      "secure": false,
      "changeOrigin": true,
      "pathRewrite": {
        "^/proxy": ""
      }
    }
  }
*/

 
const routes = [
    {
        path:'/',
        exact:true,
        component:Index
    },
    {
        path:'/login',
        render:(props)=><Login url={props}/>
    }
];


console.log(renderComponent(routes))

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {renderComponent(routes)}
            </div>
        )
    }
}
 
export default App;