import React,{Component} from 'react';
import './1.css';
class Ppa extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {children} = this.props;
        let temp = <div className="skyblue">导航</div>
        if(children){
            temp = children;
        }
        return (<div>
            {temp}
        </div>)
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bg:''
        }
    }
    render() { 
        let {bg} = this.state;
        let temp = '';
        switch(bg){
            case 'red':
                temp = <div className="red">导航</div>
            break;
            case 'green':
                temp = <div className="green">
                    <h1>导航</h1>
                    <ul><li>1</li><li>2</li></ul>
                </div>
            break;
        }

        // console.log(temp);
        return (
            <div>
                <button onClick={()=>{this.setState({bg:'red'})}}>变红</button>
                <button onClick={()=>{this.setState({bg:'green'})}}>变绿</button>
                <Ppa>{temp}</Ppa>
            </div>
        )
    }
}
 
export default App;