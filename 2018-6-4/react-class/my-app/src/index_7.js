import React,{Component} from 'react';
import ReactDOM from 'react-dom';

/*
    当input添加value值之后就变成了受控组件

    受控组件:
        输入框中的内容就锁定了（修改不了）

    只有改变了数据，才会修改输入框中的内容。

    加 onChange={} 事件，不然会报错 

*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            val:'hehe'
        }
    }
    change = (ev) => {
        let {value:val} = ev.target;
        this.setState({val});
    }

    up = (ev) => {
        if(ev.keyCode == 13){
            let {arr,val} = this.state;
            arr.push(val);
            val = '';
            this.setState({arr,val});
        }
    }

    render() { 
        let {val,arr} = this.state;
        let newArr = arr.map((e,i)=><li key={i}>{e}</li>)
        return ( 
            <div>
                <input 
                    type="text"
                    value={val}
                    onChange={this.change}
                    onKeyUp = {this.up}
                />
                {/* {val} */}
                <ul>{newArr}</ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)