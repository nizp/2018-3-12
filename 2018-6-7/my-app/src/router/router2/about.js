import React from 'react';
import {Link} from 'react-router-dom';
class About extends React.Component {
    render() { 
        return (
            <div>
                <h1>关于</h1>
                <div>这个是关于的主页</div>
                <button>
                    <Link to="/about/a">关于我们</Link>
                </button>
                <button>
                    <Link to="/about/b">关于你们</Link>
                </button>
                <button>
                    <Link to="/about/c">关于它们</Link>
                </button>
            </div>
        )
    }
}
 
export default About;