import React from 'react';
import {addDate,addNum,minusNum} from './actions/actions';
class App extends React.Component {
    add = () => {
        let {store:{dispatch}} = this.props;
        dispatch(addNum());
    }
    minus = () => {
        let {store:{dispatch}} = this.props;
        dispatch(minusNum());
    }
    up = (ev) => {
        if(ev.keyCode === 13){
            let {store:{dispatch}} = this.props;
            let {txt} = this.refs;
            dispatch(addDate(txt.value));
            txt.value = '';
        }
    }   

    render() { 
        let {store} = this.props;
        let num = store.getState().r1;  //第一个reducer的数据
        let arr = store.getState().r2;//第二个reducer的数据

        let newArr = arr.map((e,i)=>{
            return <li {...{
                key:i,
                id:e.id
            }}>{e.txt}</li>
        });


        return (
            <div>
                <input 
                    type="text" 
                    ref="txt"
                    onKeyUp={this.up}
                />
                <ul>{newArr}</ul>
                <button
                    onClick={this.minus}
                >-</button>
                <span>{num}</span>
                <button
                    onClick={this.add}
                >+</button>
            </div>
        )
    }
}
 
export default App;