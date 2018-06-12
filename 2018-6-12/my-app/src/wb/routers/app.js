import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {renderComponent} from './routers';
import Login from '../login';
import Index from '../index';
import Page from '../page';
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
        // child:(url)=>(<Index url={url}/>)
        render:()=>{
            return <Redirect to="/page/1"/>
        }
    },
    {
        path:'/page/:id',
        exact:true,
        component:Index
    },
    {
        path:'/login',
        render:(props)=><Login url={props}/>
    }
];

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