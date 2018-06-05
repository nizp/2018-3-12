import React,{Component} from 'react';
class ToList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    change = () => {
        let {id,ccFn} = this.props;
        ccFn(id);
    }
    render() { 
        let {txt,id,checked} = this.props;
        return ( 
            <li className={checked?'completed':''}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked = {checked}
                        onChange={this.change}
                    />
                    <label>{txt}</label>
                    <button className="destroy"></button>
                </div>
                <input 
                    className="edit" 
                
                /> 
            </li>
        )
    }
}
 
export default ToList;