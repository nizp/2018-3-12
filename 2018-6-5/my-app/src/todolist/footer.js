import React,{Component} from 'react';
class ToFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {lenn} = this.props;
        return ( 
            <footer className="footer">
                <span className="todo-count">
                    <strong>{lenn}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all" className="selected">全部</a>
                    </li>
                    <li>
                        <a href="#/active" className="">未完成</a>
                    </li>
                    <li>
                        <a href="#/completed" className="">已完成</a>
                    </li>
                </ul>
            </footer>
        )
    }
}
 
export default ToFooter;