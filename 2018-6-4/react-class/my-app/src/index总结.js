/*
    1.npm start 启动

    2.index.js

    3.引入react,react-dom

    4.ReactDOM.render(component,el,callback)

    5.定义组件
        class App extends Component {
            constructor(){
                super();
                this.state = {
                    //初始化数据
                }
            }
            render(){
                return (
                    <div> //顶层只能有一个元素
                        <h1 className="active"></h1>
                        <input />
                        {执行js,[]:展开}
                    </div>
                )
            }
        }
    6.
        let arr = [1,2,3,4];
        ReactDOM.render(<App arr={arr}/>,el,callback)
        this.props去拿

    7.
        this.setState();修改状态->改变视图

    8.
        onClick,onMouseOver.... = {this.fn}
        onClick,onMouseOver.... = {(e)=>{this.fn(e)}}
        fn = () => {}

    9.
        受控组件
            表单加了value就变成受控组件

            必须要:
                onChange

        非受控组件:
            defaultValue
*/