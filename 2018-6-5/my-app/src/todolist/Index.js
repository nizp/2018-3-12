import React,{Component} from 'react';
import ToHeader from './head';
import ToList from './list';
import ToFooter from './footer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true,editing:false},
                {name:"呵呵1",id:1,checked:false,editing:false}
            ]
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

    //添加
    add = (obj) => {
        let {arr} = this.state;
        arr.unshift(obj);
        this.setState({arr});
    }

    render() { 
        let {arr} = this.state;

        let newArr = arr.map((e,i)=>{
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccFn:this.changeChecked
            }}/>
        }) 

        

        return ( 
            <section className="todoapp">
                <div>
                    <ToHeader {...{add:this.add}}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked=""
                        />
                        <ul className="todo-list">
                            {newArr}
                        </ul>
                    </section>
                    <ToFooter />
                </div>
            </section>
         )
    }
}
 
export default App;