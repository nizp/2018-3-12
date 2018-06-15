import React,{Component} from 'react';
import {renderComponent} from './routers';
import GWC from './gwc';
import SG from './sg';
import {Link} from 'react-router-dom'

let routes = [
    {
        path:'/',
        component:GWC
    },
    {
        path:'/:id',
        render:({match})=>{
            let id = 'sg';
            if(match.params){id = match.params.id}
            switch(id){
                case 'sg':
                    return <SG {...{title:'水果',n:'reducer1'}}/>
                case 'dn':
                    return <SG {...{title:'电脑',n:'reducer2'}}/>
            }
        }
    }
];

class App extends Component {
    render() { 
        return (
            <div>
                <Link to="/sg">
                    <button>水果</button>
                </Link>
                <Link to="/dn">
                    <button>电脑</button>
                </Link>
                {renderComponent(routes)}
            </div>
        )
    }
}
 
export default App;