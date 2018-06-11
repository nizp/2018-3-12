import React,{Component} from 'react';
import List from './list';
import './weibo.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'',
            arr:[]
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
                    this.getData('act=get&page=1')
                    .then((data)=>{
                        this.setState({arr:data,val:''})
                        console.log(data);
                    });
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


    render() { 
        let {val,arr} = this.state;

        let newArr = arr.map((e,i)=>{
            return <List {...{
                key:i,
                id:e.id,
                txt:e.content,
                dislike:e.dislike,
                like:e.like,
                time:e.time
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
                        <a href="#" className="active">1</a>
                        <a href="#" >2</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index;