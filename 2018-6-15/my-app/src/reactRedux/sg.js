import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';

class SG extends Component {
    clickFn = (e) => {
        let {click} = this.props;
        console.log(this.props)
        click(e);
    }
    render() { 
        let {data,title} = this.props;
        return (
            <div>
                <h2>{title}</h2>
                {
                   data.map((e,i)=>{
                       return (<div key={i}>
                           <span>{e.name}</span>
                           <span>{e.price}</span>
                           <button
                                onClick={()=>{this.clickFn(e)}}
                           >加入购物车</button>
                       </div>)
                   }) 
                }
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state[ownProps.n]};
},(dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
})(SG);
