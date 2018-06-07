import React from 'react';
import Index from './index';
import Login from './login';
import {Route,Link,Redirect} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onOff:false
        }
    }
    go = () => {
        this.setState({onOff:true});
    }
    outFn = () => {
        this.setState({onOff:false});
    }
    render() { 
        let {onOff} = this.state;
        return (
            <div>
                <Route exact path="/" render={()=>{
                    return <Index onOff={onOff} outFn={this.outFn}/>
                }} />
                <Route path="/login" render={()=>{
                    if(onOff){
                        return <Redirect to="/" />
                    }else{
                        return <Login go={this.go}/>
                    }
                }} />
            </div>
        )
    }
}
 
export default App;
