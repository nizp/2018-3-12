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
            num:0,
            val:'hehe1'
        }
    }

    click = () => {
        let {val,arr} = this.state;
        arr.push(val);
        val = '';
        this.setState({arr,val});
    }

    change = (ev) => {
        let {value} = ev.target;
        this.setState({
            val:value
        })
    }

    render() { 
        let {arr,val} = this.state;
        let newArr = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        });
        return ( 
            <div>
                <input 
                    type="text" 
                    value={val}
                    onChange={this.change}
                />
                <button 
                    onClick={this.click}
                >按钮</button>
                {/* {val} */}
                <ul>{newArr}</ul>
                {/* <h1>{val}</h1> */}
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)