import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class Ppa extends React.Component {
//     componentWillReceiveProps (){
//         console.log('父级更新了');
//     }
//     shouldComponentUpdate (newProps,newState){
//         /*
//             做性能优化的
//                 return true  让它更新
//                 return false 不让更新
//         */
//        console.log('子级有更新')
//        return true;
//     }
//     componentWillUnmount(){
//         console.log('死亡');  //一般在切换路由的时候干的事
//     }
//     render() { 
//         console.log(123);
//         return (<div>
//             {this.props.txt}
//         </div>)
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str:[1,2,3,4]
        }
        //只执行一次
        console.log('constructor');
    }
    componentWillMount(){
        console.log('一上来就执行');  //开启loading
    }
    componentDidMount(){
        /*
            首次的数据请求，也只执行一次，首次关闭loading
        */
        setTimeout(()=>{
            this.setState({str:[1,2,3,4,5]})
        },2000);

        console.log('组件挂载之后执行');
    }
    componentWillReceiveProps (){
        /*
            老爹的数据发生变化的时候就会进去
        */
       console.log('父级更新了');
    }
    shouldComponentUpdate (val1,val2){
        /*
            做性能优化的
        */
       console.log('做性能优化的');
       return true;
    }
    componentDidUpdate (){
        /*
            第二次数据更新之后的 loading取消
        */
        console.log('数据更新完成');
    }
    
    render() { 
        console.log('render');
        return (
            <div>
                <div>{this.state.str}</div>
                <Link to="/list">list</Link>
               
                {/* <Route path="/list"
                    render={()=><Ppa txt={this.state.str}/>}
                /> */}
            </div>
        )
    }
}




 
export default App;
