import React from 'react';
import List from './list';
import {Route,Link} from 'react-router-dom';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[]
        }
    }
    click = () => {
        this.setState({arr:[1,2,3,4,5]});
    }
    zsclick = () => {
        this.setState({arr:['寂寞','同城','胶友']});
    }
    out = () => {
        let {outFn} = this.props;
        outFn();
        this.setState({arr:[]});
    }
    render() { 
        let {arr} = this.state;
        let {onOff} = this.props;

    let btn2 = onOff?(
        <span>
            <button
                onClick={this.zsclick}
            >你的专属新闻</button>
            <button 
                onClick={this.out}
            >退出</button>
        </span>
        ):( <Link to="/login"> 
            <button>你的专属新闻</button>
        </Link>)

        return (
            <div>
                <button 
                    onClick={this.click}
                >今日新闻</button>
               {btn2}
                <ul>{
                    arr.map((e,i)=>{
                        return <List {...{
                            key:i,
                            txt:e
                        }}/>
                    })
                }</ul>
            </div>
        )
    }
}
 
export default Index;