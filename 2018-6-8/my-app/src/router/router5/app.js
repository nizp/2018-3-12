import React,{Component} from 'react';
import {Route,Link,Redirect,NavLink} from 'react-router-dom';
import A from './a';
import B from './b';
import C from './c';
import './1.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div id="box">
                <NavLink exact  activeClassName="active" to="/"><button>A</button></NavLink>
                <NavLink activeClassName="active" to="/b"><button>B</button></NavLink>
                <NavLink activeClassName="active" to="/c"><button>C</button></NavLink>
                {/* <Route exact path="/" component={A}/> */}
                <Route exact path="/" component={A}/>
                <Route path="/b" component={B}/>
                <Route path="/c" component={C}/>
            </div>
        )
    }
}
 
export default App;