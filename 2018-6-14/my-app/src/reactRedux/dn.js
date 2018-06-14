import React,{Component} from 'react';
import {connect} from 'react-redux';
class DN extends Component {
    render() { 
        let {data} = this.props;
        // console.log(data);
        return (
            <div>
                <h2>电脑</h2>
                {
                   data.map((e,i)=>{
                       return (<div key={i}>
                           <span>{e.name}</span>
                           <span>{e.price}</span>
                           <button>加入购物车</button>
                       </div>)
                   }) 
                }
            </div>
        )
    }
}

//获取数据
export default connect((state)=>{
    return {data:state.reducer2};
})(DN);
