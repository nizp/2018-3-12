import React from 'react';
import {Link} from 'react-router-dom';
class Btn extends React.Component {
    click = () => {
        let {url:{history:{goBack}}} = this.props;
        goBack();
    }
    render() { 
        return (
            <div>
                <Link to="/">
                    <button>首页</button>
                </Link>
                <Link to="/about">
                    <button>关于</button>
                </Link>
                <button
                    onClick={this.click}
                >上次操作</button>
            </div>
        )
    }
}
 
export default Btn;