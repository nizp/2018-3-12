import React from 'react'; //diff
import ReactDOM from 'react-dom'; //数据转DOM
import './index.css';
/*
    JSX:
        jsXML
            <Person>
                <div></div>
            </Person>

        
        ReactDOM.render(组件或者标签,挂载点,当挂载完成之后的回调函数)
        
        *** 顶层元素只能有一个标签

        *** 所有的class都要写成className

        *** {可以执行js代码}

            {[1,2,3,4]} -> 1,2,3,4 展开数组

            不能直接放对象，可以放对象的属性,如果要显示对象
            使用JSON.stringify(obj)转一道。

        *** 单标签要有结束符 /

            <input />  <img />

*/

let num = 10;
let arr = [1,2,3,4];
let obj = {name:'hehe'}
ReactDOM.render(
    <div>
        <h1 className="active">你好</h1>
        <input />
        {/* <div>{alert(1)}{num+=20}</div> */}
        {obj.name}
    </div>
    ,
    document.getElementById('root'),
    ()=>{
        console.log('挂载完成');
    }
);

if(module.hot){
    module.hot.accept();
}

