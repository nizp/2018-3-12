import React,{Component} from 'react';
 /*
    父级传递的数据只能父级修改，子级修改不了

    子传父，通过回调函数传递。

        父级定义一个修改数据的方法，传给子级，让子级去调用
        父级的这个方法，这样到达触发子级，修改父级的数据，渲染最新的数据

    因为constructor只会执行一次，可以把父类的数据继承给子类
    （子类就有了父类的数据），改变子类的数据只会作用子类是不会
    影响父类的
    如果在修改子类数据的同时关联父类，那么还是要用回调。
    

*/
class List extends Component {
    /*
        执行一次
    */
    constructor(props) {
        super(props);
        let {checked} = props;
        this.state = {
            checked
        }
        // console.log('执行1次')
    }

    change = () => {
        let {id,cc} = this.props;
        let {checked} = this.state;

        this.setState({checked:!checked});
        cc(id);
    }
   
    render() { 
        // console.log('执行多次');
        let {txt} = this.props;
        let {checked} = this.state;
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
