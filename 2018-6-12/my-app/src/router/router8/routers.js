import React from 'react';
import {Route} from 'react-router-dom';
let num = 0;
function renderComponent(routers,parentPath){
    let routs = routers.reduce((arr,e,i)=>{
        num ++;
        arr.push(<Route 
            path={parentPath?parentPath+e.path:e.path} 
            component={e.component} 
            key={+new Date + num}
            exact={e.exact}
            render={e.render}
            strict={e.strict}
            children={e.child}
        />);
        if(e.childs){
            let s = renderComponent(e.childs,e.path)
            return [...arr,...s];
        }
        return arr;
    },[]);
    return routs;
}

function getParent(){

}

export {renderComponent};