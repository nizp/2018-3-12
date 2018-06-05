import React,{Component} from 'react';
import List from '../list2/list';

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
            ]
        }
    }

    cc = (id) => {
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id === id){
                e.checked = ! e.checked
            }
        });
        this.setState({arr});
    }

    render() {
        let {arr} = this.state;
        let newArr = arr.map((e,i)=>{
            let obj = {
                key:i,
                txt:e.txt,
                checked:e.checked,
                id:e.id,
                cc:this.cc
            }
            return  <List {...obj}/>
        });
        return (
            <div>
                <input type="text" />
                <p> {JSON.stringify(arr)}</p>
                <ul>{newArr}</ul>
            </div>
        )
    }
}
 
export default App;

