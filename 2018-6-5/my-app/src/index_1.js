import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
    button
    input
    img

*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            num:0,
            val:''
        }
    }

    click = () => {
        let {arr,num,val} = this.state;
        // num ++;
        arr.push(val);
        val = '';
        this.setState({
            arr,
            val
            // arr,
            // num
        })
    }

    change = (ev) => {
        let {value:val} = ev.target;

        this.setState({
            val
        })
    }

    render() { 

        let {arr,val} = this.state;
        let newArr = arr.map((e,i)=><li key={i}>{e}</li>);

        return (
            <div>
                <button
                    onClick = {this.click}
                >按钮</button>
                <input 
                    type="text" 
                    value={val}
                    onChange={this.change}
                />
                Hello,world!
                <ul>{newArr}</ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
