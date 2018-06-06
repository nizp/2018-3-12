import React,{Component} from 'react';
import './App.css';
import Re from '../regexp/regexp';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {
                    name:'QQ：',
                    txt:'请输入QQ',
                    re:/^[1-9]\d{4,10}$/,
                    count:false
                },
                {
                    name:'Email：',
                    txt:'请输入邮箱',
                    re:/^[A-Za-z][\w]{6,11}@[0-9a-z]{2,8}((\.com|\.cn)|(\.com\.cn))$/,
                    count:false
                },
                {
                    name:'Mobile：',
                    txt:'请输入手机号码',
                    re:/^1[3-9]\d{9}$/,
                    count:false
                },
                {
                    name:'Date：',
                    txt:'请输入生日',
                    re:/^(\d+)\D+(\d+)\D+(\d+)\D?$/,
                    count:false
                }
            ]
        }
    }

    changeCount = (name,onOff) => {
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.name === name){
                e.count = onOff
            }
        })
        this.setState({arr});
    }

    render() { 
        let {arr} = this.state;

        let all = arr.every(e=>e.count);

        let newArr = arr.map((e,i)=>{
            return (<Re {...{
                name:e.name,
                txt:e.txt,
                re:e.re,
                key:i,
                changeCount:this.changeCount
            }}/>)
        })
        return (
            <div id="contain">
                {newArr}
                <p>
                    <input
                        className={all?'succ':'fail'}
                        type="button" 
                        value="注册" 
                        id="btn" 
                    /></p>
            </div>
        )
    }
}
 
export default App;