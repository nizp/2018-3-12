import React,{Component} from 'react';
class QQ extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div id="qq">
                <span>QQ：</span>
                <input type="text" name="qq" placeholder="请输入QQ" />
            </div>
         )
    }
}
 
export default QQ;