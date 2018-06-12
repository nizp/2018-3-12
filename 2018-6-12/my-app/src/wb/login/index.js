import React,{Component} from 'react';
import { Redirect } from 'react-router-dom'
import './index.css';
import '../css/register.css';
import '../css/reset.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uVal:'',
            pVal:'',
            info:'请输入用户名密码'
            // cookie:localStorage.getItem('username')
        }
    }

    //输入用户名
    changeUser = (ev) => {
        this.setState({uVal:ev.target.value});
    }
    //输入密码
    changePass = (ev) => {
        this.setState({pVal:ev.target.value});
    }

    //注册
    reg = () => {
        let {pVal,uVal,info} = this.state;
        if(pVal && uVal){
            fetch('http://localhost:88/api/user/register',{
                method:"post",
                body :`username=${uVal}&password=${pVal}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((e)=>e.json())
            .then(data => {
                if(data.code === 0){
                    this.setState({info:'注册成功!开始你的表演!'})
                }else if(data.code === 1){
                    this.setState({info:'注册失败!!',pVal:'',uVal:''})
                }
            })

        }else{
            alert('请输入内容');
        }
    }

    //登录
    login = () => {
        let {pVal,uVal,info} = this.state;
        let {url:{history}} = this.props;
        if(pVal && uVal){
            fetch('http://localhost:88/api/user/login',{
                method:"post",
                body :`username=${uVal}&password=${pVal}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((e)=>e.json())
            .then(data => {
                console.log(data);
                if(data.code === 0){
                    this.setState({info:'登录成功！'},()=>{
                        setTimeout(()=>{
                            history.push('/');
                        },2000);
                    });
                }else if(data.code === -3){
                    this.setState({info:data.msg,pVal:'',uVal:''})
                }
            })

        }else{
            alert('请输入内容');
        }
    }


    render() { 
        let {uVal,pVal,info} = this.state;

        return (
            <div>
                <h2 id="userInfo">欢迎回来,<span id="user"></span></h2>
            <div className="form-wrapper">
                <div className="banner"></div>
                <form id="form">
                    <div className="item-wrapper">
                        <label>登陆名</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            value={uVal}
                            onChange={this.changeUser}
                        />
                    </div>
                    <div className="item-wrapper">
                        <label >密码</label>
                        <input 
                            type="password" 
                            id="password"
                            value={pVal} 
                            onChange={this.changePass}
                        />
                    </div>
                    <input 
                        type="button" 
                        value="登陆" 
                        id="submit" 
                        onClick={this.login}
                    />
                    <input 
                        // style={{'display':cookie?'none':'block'}}
                        type="button" 
                        value="注册" 
                        id="register" 
                        onClick = {this.reg}
                    />
                </form>
                <p id="info" style={{'display':'block'}}>{info}</p>
            </div>
            </div>
        )
    }
}
 
export default Login;