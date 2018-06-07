import React from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import './1.css';
import About1 from './aboutchild/aboutA'
import About2 from './aboutchild/aboutB'
import About3 from './aboutchild/aboutC'
import AboutX from './aboutchild/aboutX'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    <button>
                        <Link to="/">首页</Link>
                    </button>
                    <button>
                        <Link to="/about">关于</Link>
                    </button>   
                </div>
                <Route exact path="/" component={Index}/>
                {/* <Route path="/about" component={About}/> */}
                <Route exact strict path="/about" component={AboutX}/>
                <Route  path="/about/:id" component={AboutX}/>
                {/* <Route  path="/about/a" component={About1}/>
                <Route  path="/about/b" component={About2}/>
                <Route  path="/about/c" component={About3}/> */}
            </div>
        )
    }
}

export default App;