import React,{Component} from 'react';
import List from '../list/list';
import PPA from '../PPA/app';

/*
    父子组件传递为单向流动的

    父传子，通过给子组件添加属性传递的。

    子组件要接收父组件的数据，通过this.props去接收
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,3,2],
            val:'',
            arr2:[1,2,3]
        }
    }
    click = () => {
        let {arr,val} = this.state;
        arr.push(val);
        val = '';
        this.setState({
            arr,
            val
        })
    }

    change = (ev) => {
        let {value:val} = ev.target;

        this.setState({
            val
        })
    }

    render() { 
        let {arr,val,arr2} = this.state;
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
                <List rra={arr}/>
                <PPA />
            </div>
        )
    }
}
 
export default App;