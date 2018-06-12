import React,{Component} from 'react';
import List from './list';
import Page from '../page';
import './weibo.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'', //输入框的内容
            arr:[],
            PageC:1,//PageC是页码的总数
            changeNum:1, //当前是多少页
        }
    }

    //输入内容
    changeText = (ev) => {
        this.setState({val:ev.target.value});
    }
    //点击发送
    click = () => {
        let {val,arr} = this.state;
        if(val){
            this.getData('act=add&content='+val)
            .then((data)=>{
               if(data.code == 0){
                    this.getArr(true);
               }
            })
        }else{
            alert('请输入内容');
        }
    }

    //数据请求的公共函数
    getData = async (url) => {
        let data = await fetch('http://localhost:88/api/weibo?'+url)
        return await data.json();
    }
    //上来先拿数据
    componentDidMount(){
        console.log('小样,挂载');
        this.getArr(true);
    }

   async componentWillReceiveProps({match:{params}}){
        console.log('你跳不');

        // console.log(params.id*1)
        let newArr = await this.getData('act=get&page='+(params.id*1));
        this.setState({arr:newArr,val:''});
    }

    //更新数据
    //在点赞的时候也会请求一次页码
    getArr = async (onOff) => {
        let {match:{params}} = this.props;
        let num = params.id?params.id*1:1;
    
        //请求当页的数据
        let newArr = await this.getData('act=get&page='+num);
        if(onOff){
            //请求总页
            let pageNum = await this.getData('act=get_page_count');
            this.setState({arr:newArr,val:'',PageC:pageNum.count,changeNum:num});
        }else{
            this.setState({arr:newArr,val:''});
        }
    }
    //!!! render中不能用setState,会死循环
    render() { 
        let {val,arr,PageC,changeNum} = this.state;
        let {match:{params}} = this.props;
        changeNum = params.id?params.id*1:1;
       

        let newArr = arr.map((e,i)=>{
            return <List {...{
                key:i,
                id:e.id,
                txt:e.content,
                dislike:e.dislike,
                like:e.like,
                time:e.time,
                getArr:this.getArr,
                changeNum
            }}/>
        });

        
        return (
            <div className="nArea">
                <div className="takeComment">
                    <textarea 
                        name="textarea" 
                        className="takeTextField" 
                        id="text" 
                        value={val}
                        onChange={this.changeText}
                    />
                    <div className="takeSbmComment">
                        <input 
                            type="button" 
                            id="submit" 
                            className="inputs" 
                            onClick={this.click}
                        />
                        <span>(可按 Enter 回复)</span>
                    </div>
                </div>
                <div className="commentOn">
                    <div className="messList" id="div1" style={{height:'502px'}}>
                        {newArr}
                    </div>
                    <Page 
                        getArr={this.getArr}
                        PageC={PageC}
                        changeNum={changeNum}
                    />
                </div>
            </div>
        )
    }
}


export default Index;