import React,{Component} from 'react';
import {upMove} from './ations';
class List extends Component {
	change = () => {

	}

	up = () => {
		let {store:{dispatch},id} = this.props;
		dispatch(upMove(id));
	}
    render() { 
		let {checked,id,name,age} = this.props;
        return (
            <tr className={checked?'active':''}>
				<td><input 
					type="checkbox" 
					checked={checked}
					onChange={this.change}
				/></td>
				<td>{id}</td>
				<td>{name}</td>
				<td>{age}</td>
				<td>
					<input type="button" value="删除"/>
					<input 
						type="button" 
						value="上移"
						onClick = {this.up}
					/>
					<input type="button" value="下移"/>
				</td>
			</tr>
        )
    }
}
export default List;
