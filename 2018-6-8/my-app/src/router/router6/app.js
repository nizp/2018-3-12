import React,{Component} from 'react';
import {Route,Link,Redirect,NavLink,Switch} from 'react-router-dom';
import A from './a';
import B from './b';
import C from './c';
import './1.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        /*
            Switch只要首次匹配到的组件
            如果有2个条件匹配，那么只有第一次。

            <Route exact path="/" component={A}/>
            <Route path="/c" component={C}/>
            <Route path="/:id" component={B}/>

            /:id 既匹配 \c 
            
            也匹配 \b

            当匹配\c的时候不让\b显示，就使用Switch

            注意:
                模糊匹配尽量放在精确匹配的后（下）面。



        */
        return (
            <div id="box">
                <NavLink exact  activeClassName="active" to="/"><button>A</button></NavLink>
                <NavLink activeClassName="active" to="/b"><button>B</button></NavLink>
                <NavLink activeClassName="active" to="/c"><button>C</button></NavLink>
                <Switch>
                    <Route exact path="/" component={A}/>
                    <Route path="/c" component={C}/>
                    <Route path="/:id" component={B}/>
                </Switch>
            </div>
        )
    }
}
 
export default App;