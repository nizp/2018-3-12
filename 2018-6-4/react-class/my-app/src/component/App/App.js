import React,{Component} from 'react';
import './App.css';
import QQ from '../QQ/QQ';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div id="contain">
                <QQ />
                <div id="email">
                    <span>Email：</span>
                    <input type="text" name="email" placeholder="请输入邮箱" />
                </div>
                <div id="mobile">
                    <span>Mobile：</span>
                    <input type="text" name="phone" placeholder="请输入手机号码" />
                </div>
                <div id="date">
                    <span>Date：</span>
                    <input type="text" name="birth" placeholder="请输入生日" />
                </div>
                <p><input type="submit" value="注册" id="btn" /></p>
            </div>
        )
    }
}
 
export default App;