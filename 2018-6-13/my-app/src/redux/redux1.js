import React from 'react';
import { createStore } from "redux";

const reducer = (state=0,action) => {
    switch(action.type){
        case "ADD_NUM":
            return state += action.payload
        case "MINUS_NUM":
            return state -= action.payload
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

//发起action
store.dispatch({type:'ADD_NUM',payload:1});

console.log(store.getState());

store.dispatch({type:'MINUS_NUM',payload:2});

console.log(store.getState());



class App extends React.Component {
    render() { 
        return (
            <div></div>
        )
    }
}
 
export default App;