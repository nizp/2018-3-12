import React,{Component} from 'react';
import {connect} from 'react-redux';
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
    render() { 
        return (
            <div id="gwc">
                <h2>购物车</h2>
                <ul>
                    {
                        // console.log(this.props.data)
                        this.props.data.map((e,i)=>{
                            return (
                                <li key={i}>
                                    <button>-</button>
                                    <span>{e.name}</span>
                                    <button>-</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default connect((state)=>{
    return {data:state.reducer3}
})(GWC);
