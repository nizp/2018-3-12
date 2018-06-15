import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Ppa extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (<span>{this.props.num+1}</span>)
    }   
}
Ppa.propTypes =  {
    num: PropTypes.number
};
 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:10
        }
    }
    render() { 
        return (
            <Ppa num={this.state.num}/>
        )
    }
}

export default App;