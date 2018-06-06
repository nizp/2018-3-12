import React,{Component} from 'react';
class ToList extends Component {
    constructor(props) {
        super(props);
        // let {txt} = props;
        this.state = {
            val:''
        }
    }
    change = () => {
        let {id,ccFn} = this.props;
        ccFn(id);
    }

    dele = () => {
        let {id,deleFn} = this.props;
        deleFn(id);
    }

    textChange = (ev) => {
        let {value:val} = ev.target;
        this.setState({val});
    }

    blur = () => {
        let {val} = this.state;
        let {txt,id,changeText,changeEditFail} = this.props;
        //如果没有内容就还原父类的数据
        if(!val){
            this.setState({val:txt});
            changeEditFail(id);
        }else{
            changeText(val,id);
        }

        this.setState({val:''});
    }

    db = () => {
       let {changeEdit,id} = this.props;
       changeEdit(id);
        setTimeout(()=>{
            this.refs.a.focus();
        });
       
    }

    render() { 
        let {txt,id,checked,editing} = this.props;
        let {val} = this.state;
        if(!val){
            val = txt;
        }
        

        //通过editing去判断是否需要输入内容
        let sClass = checked?'completed':'';
        if(editing)sClass += '  editing';
        return ( 
            <li className={sClass}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked = {checked}
                        onChange={this.change}
                    />
                    <label
                        onDoubleClick = {this.db}
                    >{txt}</label>
                    <button 
                        className="destroy"
                        onClick = {this.dele}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    value={val}
                    onChange={this.textChange}
                    onBlur = {this.blur}
                    ref="a"  
                /> 
            </li>
        )
    }
}
 
export default ToList;