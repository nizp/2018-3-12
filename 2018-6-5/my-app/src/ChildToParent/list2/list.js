import React,{Component} from 'react';
 /*
    父级传递的数据只能父级修改，子级修改不了

    子传父，通过回调函数传递。

        父级定义一个修改数据的方法，传给子级，让子级去调用
        达到，触发子级，修改父级的数据，渲染最新的数据


        父级传递数据给子级，子级把父级的数据变成了自己的
        然后操作自身的状态是不会影响父级的,如果父级的数据跟
        子级走，那么还是需要回调函数。
*/
class List extends Component {
    constructor(props) {
        super(props);
        let {txt,id,checked} = this.props;
        this.state = {
            txt,
            id,
            checked
        }
    }

    change = () => {
        let {cc} = this.props;
        let {id,checked} = this.state;
        checked = !checked;
        cc(id);
        this.setState({checked})
    }
    
    render() { 
        let {txt,id,checked} = this.state;
        return (
            <li>
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={this.change}
                />
                <span>{txt}{''+checked}</span>
            </li>
        )
    }
}
 
export default List;
