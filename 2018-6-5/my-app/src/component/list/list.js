import React,{Component} from 'react';
class List extends Component {
    render() { 
        let {rra} = this.props;
        console.log(rra);
        let newArr = rra.map((e,i)=><li key={i}>{e}</li>);
        return ( 
            <ul>{newArr}</ul>
        )
    }
}
 
export default List;
