import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import './1.css';


/*
    connect(fn1,fn2)(组件) 

    fn1,fn2必须返回对象

    

        是对象：
            return {actions:bindActionCreators(actions,dispatch)}
        不是对象:
            return bindActionCreators(actions,dispatch)

    返回的对象能够通过this.props去拿到

    fn1:
        读数据
        (state)=>{
            return {哪条数据:state.第几条数据}
        }

    fn2:
        合并actions和dispatch

        (dispatch)=>{
            return {
                actions:bindActionCreators(actions,dispatch)
            }
        }


        dispatch(add()) -> add();
*/

class GWC extends Component {
    minusFn = (id) => {
        let {minus} = this.props;
        minus(id);
    }
    addFn = (id) => {
        let {add} = this.props;
        add(id);
    }
    render() { 
        let arr = this.props.data;
        return (
            <div id="gwc">
                <h2>购物车</h2>
                <ul>
                    {
                        // console.log(this.props.data)
                        arr.map((e,i)=>{
                            return (
                                <li key={i}>
                                    <button
                                        onClick={()=>{this.minusFn(e.id)}}
                                    >-</button><button
                                        onClick={()=>{this.addFn(e.id)}}
                                    >+</button>
                                    <p>商品:{e.name}</p>
                                    <p>库存:{e.inventory}</p>
                                    <p>购买数量:{e.num}</p>
    
                                    <p>单价:{e.price}</p>
                                    <p>总价:{e.total}</p>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
                <div>总价:{arr.reduce((a,b)=>(a+b.total).toFixed(2)*1,0)}</div>
            </div>
        )
    }
}
 
export default connect((state)=>{
    return {data:state.reducer3}
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(GWC);
