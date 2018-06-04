import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
   
    render(){
        let {arr} = this.props;
        let newArr = arr.map((e,i)=>{
            return <li key={i}>{e}</li>
        })
        return (
            <div>
                <ul>{newArr}</ul>
            </div>
        )
    }
}
let arr = [1,2,3,4,5,6,7];
ReactDOM.render(
    <App arr={arr}/>
    ,
    document.getElementById('root')
)
if(module.hot){
    module.hot.accept();
}