import React,{Component} from 'react';
import List from '../list/list';
class PPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2,3,4,5,6,7,8],
            arr2:[3,2,1]
        }
    }
    render() { 
        let {arr,arr2} = this.state;
        return (
            <div>
                <h1>这是PPA中的list</h1>
                <List rra={arr}/>
            </div>
        )
    }
}
 
export default PPA;