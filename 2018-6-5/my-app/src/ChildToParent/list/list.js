import React,{Component} from 'react';
class List extends Component {
    /*
        父级传递的数据只能父级修改，子级修改不了

        子传父，通过回调函数传递。

            父级定义一个修改数据的方法，传给子级，让子级去调用
            达到，触发子级，修改父级的数据，渲染最新的数据
    */
    change = (id) => {
        let {cc} = this.props
        cc(id);
    }
    render() { 
        let {rra} = this.props;
        let newArr = rra.map((e,i)=>{
            return (
                <li key={i}>
                    <input 
                        type="checkbox"
                        // onChange={(id)=>{this.change(e.id)}}
                        onChange = {this.change.bind(this,e.id)}
                        checked={e.checked}
                    />
                    <span>{e.txt}</span>
                </li>
            )
        });
        return ( 
            <ul>{newArr}</ul>
        )
    }
}
 
export default List;
