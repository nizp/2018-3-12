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
            changeNum:1 //当前是多少页
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
                   //当添加成功之后，返回所有数据
                    // this.getData('act=get&page=1')
                    // .then((data)=>{
                    //     //看页码，因为点击添加的时候有可能会增加总页数
                    //     this.getData('act=get_page_count')
                    //     .then((numData)=>{
                    //         if(numData.code === 0){
                    //             this.setState({arr:data,val:'',PageC:numData.count})
                    //         }
                    //     });
                    // });
                    this.getArr();
               }
            })
            // .then(()=>{
            //     this.getData('act=get&page=1')
            //     .then((data)=>{
            //         this.setState({arr:data})
            //         console.log(data);
            //     })
            // })
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
        this.getArr();
    }

    //更新数据
    getArr = async (num=1) => {
        //请求当页的数据
        let newArr = await this.getData('act=get&page='+num)
        //请求总页
        let pageNum = await this.getData('act=get_page_count');
        this.setState({arr:newArr,val:'',PageC:pageNum.count,changeNum:num});
    }

    render() { 
        let {val,arr,PageC,changeNum} = this.state;


        let newArr = arr.map((e,i)=>{
            return <List {...{
                key:i,
                id:e.id,
                txt:e.content,
                dislike:e.dislike,
                like:e.like,
                time:e.time,
                getArr:this.getArr
            }}/>
        })

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
                    <div className="page" id="page">
                        <Page 
                            nowNum={changeNum}  
                            pnum={PageC} 
                            getArr={this.getArr}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Index;