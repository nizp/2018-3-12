import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[],
            num:0
        }
    }

    click = () => {
        let {arr,num} = this.state;
        // let newArr = arr.concat();
        // newArr.push(++num);
        arr.push(++num);
        this.setState({
            // arr:newArr,
            arr,
            num
        })
    }

    render() { 
        let {arr} = this.state;
        let newArr = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        });
        return ( 
            <div>
                <button 
                    onClick={this.click}
                >按钮</button>
                <ul>{newArr}</ul>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)