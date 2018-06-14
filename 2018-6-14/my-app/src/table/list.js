import React,{Component} from 'react';
import {upMove, downMove,ccFn,dele} from './ations';
class List extends Component {
	change = () => {
		let {store:{dispatch},id} = this.props;
		dispatch(ccFn(id));
	}

	up = () => {
		let {store:{dispatch},id} = this.props;
		dispatch(upMove(id));
	}

	down = () => {
		let {store:{dispatch},id} = this.props;
		dispatch(downMove(id));
	}
	deleFn = () => {
		let {store:{dispatch},id} = this.props;
		dispatch(dele(id));
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
					<input 
						type="button" 
						value="删除"
						onClick={this.deleFn}
					/>
					<input 
						type="button" 
						value="上移"
						onClick = {this.up}
					/>
					<input 
						type="button" 
						value="下移"
						onClick = {this.down}
					/>
				</td>
			</tr>
        )
    }
}
export default List;
