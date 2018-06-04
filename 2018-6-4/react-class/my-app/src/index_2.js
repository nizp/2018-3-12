import React,{Component} from 'react'; //diff
import ReactDOM from 'react-dom'; //数据转DOM
import './index.css';

/*
    *** 首字母必须大写

    声明一个类，继承React.Component || Component

    在组件中render方法必须有。

    传递数据通过属性来传递，通过this.props去接收

    在循环中必须加key，为了优化。


*/
// class App extends React.Component {}
class App extends Component {
    render(){
        let {arr,obj} = this.props;

        // console.log(obj);

        let newArr = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        });
        
        // console.log()

        return (
            <div>
               <div>{obj.name}</div>
               <ul>
                   {newArr}
                   {
                       //   arr.map((e,i)=><li key={i}>{e}</li>)
                   }
               </ul>
            </div>
        )
    }
}


let arr = [1,2,3,4,5];

let obj = {name:'123'}

ReactDOM.render(
   <App arr={arr} obj={obj}/>//放组件
    ,
    document.getElementById('root'),
    ()=>{
        console.log('挂载完成');
    }
);

if(module.hot){
    module.hot.accept();
}

