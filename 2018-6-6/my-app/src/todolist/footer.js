import React,{Component} from 'react';
class ToFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changState:[
                {name:'全部',state:'all'},
                {name:'未完成',state:'active'},
                {name:'已完成',state:'completed'}
            ],
            all:'all'
        }
    }

    click = (state) => {
        let {cs} = this.props;
        cs(state);
        this.setState({all:state})
    }
    render() { 
        let {lenn} = this.props;
        let {changState,all} = this.state;
        let newArr = changState.map((e,i)=>{
            return (
                <li key={i}>
                    <a 
                        href={'#/'+e.state} 
                        className={all==e.state?'selected':''}
                        onClick={(state)=>{this.click(e.state)}}
                    >{e.name}</a>
                </li>
            )
        })
        return ( 
            <footer className="footer">
                <span className="todo-count">
                    <strong>{lenn}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {newArr}
                    {/* <li>
                        <a href="#/all" className="selected">全部</a>
                    </li>
                    <li>
                        <a href="#/active" className="">未完成</a>
                    </li>
                    <li>
                        <a href="#/completed" className="">已完成</a>
                    </li> */}
                </ul>
            </footer>
        )
    }
}
 
export default ToFooter;