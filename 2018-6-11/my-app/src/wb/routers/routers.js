import React from 'react';
import {Route} from 'react-router-dom';
let num = 0;
function renderComponent(routers){
    let routs = routers.reduce((arr,e,i)=>{
        num ++;
        arr.push(<Route 
            path={e.path} 
            component={e.component} 
            key={+new Date + num}
            exact={e.exact}
            render={e.render}
            strict={e.strict}
            children={e.child}
        />);
        return arr;
    },[]);
    return routs;
}
export {renderComponent};