import React from 'react';
import {Route} from 'react-router-dom';
function renderComponent(routers){
    let routs = routers.map((e,i)=>{
        return (
            <Route 
                path={e.path} 
                component={e.component} 
                key={i}
                exact={e.exact}
                render={e.render}
                strict={e.strict}
                children={e.child}
            />
        )
    });
    return routs;
}
export {renderComponent};