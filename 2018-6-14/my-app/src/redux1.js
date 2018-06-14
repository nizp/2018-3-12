import React from 'react';
import { createStore} from "redux";

function add(){
    return {
        type:"ADD_NUM"
    }
}

function addifodd(){
    return (dispatch,getState)=>{
        let num = getState();
        if(num % 2 === 0){
            return false;
        }
        dispatch(add());
    }
}


function asyncFn(){
    let num = 0;
    return (dispatch,getState) => {
        setTimeout(()=>{
            num = 100;
            dispatch({
                type:"ADD_NUM_ASYNC",
                num
            });
           
        });
    }
}


class App extends React.Component {
    
    render() { 
        let {store} = this.props;
        return (
            <div>
                <button>-</button>
                <span>{store.getState()}</span>
                <button
                    onClick={()=>{store.dispatch(asyncFn())}}
                >+</button>
                
            </div>
        )
    }
}
 
export default App;