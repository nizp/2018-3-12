import React,{Component} from 'react';
import List from '../list/list';

/*
    父子组件传递为单向流动的

    父传子，通过给子组件添加属性传递的。

    子组件要接收父组件的数据，通过this.props去接收
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {txt:'呵呵',id:0,checked:false},
                {txt:'呵呵哒',id:1,checked:false},
                {txt:'呵呵他',id:2,checked:true}
            ],
            val:''
        }
    }

    changeChecked = (id) => {
        let {arr} = this.state;

        arr.forEach(e=>{
            if(e.id === id){
                e.checked = !e.checked
            }
        });

        this.setState({arr});
    }

    click = () => {
        let {arr,val} = this.state;
        arr.push({txt:val,id:+new Date,checked:false});
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
                {/* <List rra={arr} cc={this.changeChecked}/> */}
                <List {...{
                    rra:arr,
                    cc:this.changeChecked
                }}/>
            </div>
        )
    }
}
 
export default App;