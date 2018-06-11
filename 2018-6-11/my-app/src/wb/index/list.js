import React,{Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    tDou = (n) => {
        return n<10?'0'+n:''+n;
    }
    getTime = (time)=> {
        let date = new Date(time); //传入一个服务器的时间
        let iYear =  date.getFullYear();
        let iMoun =  date.getMonth() + 1;
        let iDate = date.getDate();
        let iH = date.getHours();
        let iM = date.getMinutes();
        let iS = date.getSeconds();
        let str = iYear + '-' +this.tDou(iMoun) + '-' + this.tDou(iDate);
       return str += ' '+ this.tDou(iH) + ':' + this.tDou(iM) + ':'+ this.tDou(iS);
    }
    render() { 
        let {id,txt,dislike,like,time} = this.props;
        return (
            <div className="reply">
                <p className="replyContent">{txt}</p>
                <p className="operation">
                    <span className="replyTime">{this.getTime(time)}</span>
                    <span className="handle">
                        <a href="javascript:;" className="top">{like}</a>
                        <a href="javascript:;" className="down_icon">{dislike}</a>
                        <a href="javascript:;" className="cut">删除</a>
                    </span>
                </p>
            </div>
        )
    }
}
 
export default List;