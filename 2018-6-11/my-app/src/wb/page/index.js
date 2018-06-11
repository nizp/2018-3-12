import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Page extends Component {
    constructor(props) {
        super(props);
    }

    changPage = (i) => {
        let {getArr} = this.props;
        getArr(i);
    }
    
    render() { 
        let {pnum,nowNum} = this.props;
        
        let newA = [];
        for(let i=1;i<=pnum;i++){
           newA.push(<a 
                key={i} 
                href="javascript:;"
                className={nowNum==i?'active':''} 
                onClick={()=>{this.changPage(i)}}
            >{i}</a>);
        }
        return (    
            <div>
                {newA}
            </div>
       )
    }
}
 
export default Page;