import React,{Component} from 'react';
import {Route,Link,Redirect,NavLink,Switch} from 'react-router-dom';
import A from './a';
import B from './b';
import C from './c';
import D from './d';
import './1.css';

let routers = [
    {
        path:'/',
        component:A,
        exact:true,
        // child:(()=>{return <A />})
    },
    {
        path:'/c',
        exact:true,
        // render:((url)=>{return <C url={url}/>}),
        children:[
            {
                path:'/a',
                component:D,
            },
            {
                path:'/b',
                component:A 
            }
        ],
        component:C,
    },
    {
        path:'/:id',
        component:B,
    }
];



function renderComponent(routers,parentPath){
    let routs = routers.reduce((arr,e,i)=>{
        if(e.children){
            arr.push(<Route 
                path={parentPath?parentPath+e.path:e.path} 
                component={e.component} 
                key={i}
                exact={e.exact}
                render={e.render}
                strict={e.strict}
                children={e.child}
            />);
            let s = renderComponent(e.children,e.path)
            return [...arr,...s];
        }else{
            arr.push(<Route 
                path={parentPath?parentPath+e.path:e.path} 
                component={e.component} 
                key={i}
                exact={e.exact}
                render={e.render}
                strict={e.strict}
                children={e.child}
            />)
            return arr;
        }
    },[]);
    return routs;
}

// function re(){
//     let arr = [];
//     renderComponent(routers).map(e=>{
//         if(Array.isArray(e)){
//             arr.push(...e);
//         }else{
//             arr.push(e);
//         }
//    });
//    return arr;
// }




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

        
        let routs = renderComponent(routers);
        console.log(routs)
       
        return (
            <div id="box">
                <NavLink exact  activeClassName="active" to="/"><button>A</button></NavLink>
                <NavLink activeClassName="active" to="/b"><button>B</button></NavLink>
                <NavLink exact activeClassName="active" to="/c"><button>C</button></NavLink>
                <NavLink activeClassName="active" to="/c/a"><button>C/a</button></NavLink>
                <Switch>
                    {routs}
                </Switch>
            </div>
        )
    }
}
 
/*
 {/* <Route exact path="/" component={A}/>
                    <Route path="/c" component={C}/>
                    <Route path="/:id" component={B}/> }
*/
export default App;