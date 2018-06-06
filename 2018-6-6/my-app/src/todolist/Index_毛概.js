import React,{Component} from 'react';
import ToHeader from './head';
import ToList from './list';
import ToFooter from './footer';
import './css/index.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true,editing:false},
                {name:"呵呵1",id:1,checked:false,editing:false}
            ],
            stateAll:'all'
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

    //变全选，变全不选

    checkedAll = (ev) => {
        let {checked} = ev.target;
        let {arr} = this.state;
        
        arr.forEach(e=>e.checked=checked);
        this.setState({arr});

    }

    //删除
    deleFn = (id) => {
        let {arr} = this.state;
        arr = arr.filter(e=> e.id!=id);
        this.setState({arr});
    }
    //修改All
    changState = (stateAll) => {
        this.setState({stateAll});
    }

    //修改内容
    changeText = (newVal,id) => {
        console.log(newVal,id)
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id === id){
                e.name = newVal
                e.editing = false
            }
        });
        this.setState({arr});
    }

    changeEdit = (id) => {
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id == id){
                e.editing = !e.editing
            }
        });

        this.setState({arr});
    }

    changeEditFail = (id) => {
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.id == id){
                e.editing = false
            }
        });

        this.setState({arr});
    }



    render() { 
        let {arr,stateAll} = this.state;
        let all = arr.length?arr.every(e=>e.checked):false;
        let len = arr.length;

        let arr2 = arr.filter((e,i)=>{
            if(e.checked) len --;
            switch(stateAll){
                case  'all':
                    return e;
                break;
                case  'active':
                    return !e.checked;
                break;
                case  'completed':
                    return e.checked;
                break;
            }
        })

        let newArr = arr2.map((e,i)=>{
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccFn:this.changeChecked,
                deleFn:this.deleFn,
                editing:e.editing,
                changeText:this.changeText,
                changeEdit:this.changeEdit,
                changeEditFail:this.changeEditFail
            }}/>
        }) 
        console.log(arr);
        return ( 
            <section className="todoapp">
                <div>
                    <ToHeader {...{add:this.add}}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}
                            onClick = {this.checkedAll}
                        />
                        <ul className="todo-list">
                            {newArr}
                        </ul>
                    </section>
                    <ToFooter 
                        lenn={len} 
                        cs={this.changState}
                    />
                </div>
            </section>
         )
    }
}
 
export default App;