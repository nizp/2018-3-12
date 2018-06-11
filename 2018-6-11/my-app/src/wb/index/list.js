import React,{Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
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

    like = async (ev) => {
        let {innerHTML} = ev.target;
        let {id,getArr} = this.props;
        let likeData = await fetch('http://localhost:88/api/weibo?act=like&id='+id)
        let data = await likeData.json();
        if(data.code ===0){
            getArr();
        }
    }

    dislike = async (ev) => {
        let {innerHTML} = ev.target;
        let {id,getArr} = this.props;
        let dislikeData = await fetch('http://localhost:88/api/weibo?act=dislike&id='+id)
        let data = await dislikeData.json();
        if(data.code ===0){
            getArr();
        }
    }

    cut = async (ev) => {
        let {id,getArr} = this.props;
        let removeData = await fetch('http://localhost:88/api/weibo?act=del&id='+id)
        let data = await removeData.json();
        if(data.code ===0){
            getArr();
        }
    }


    render() { 
        let {id,txt,time,dislike,like} = this.props;
        return (
            <div className="reply">
                <p className="replyContent">{txt}</p>
                <p className="operation">
                    <span className="replyTime">{this.getTime(time)}</span>
                    <span className="handle">
                        <a 
                            href="javascript:;" 
                            className="top"
                            onClick={this.like}
                        >{like}</a>
                        <a 
                            href="javascript:;" 
                            className="down_icon"
                            onClick={this.dislike}
                        >{dislike}</a>
                        <a 
                            href="javascript:;" 
                            className="cut"
                            onClick={this.cut}
                        >删除</a>
                    </span>
                </p>
            </div>
        )
    }
}
 
export default List;