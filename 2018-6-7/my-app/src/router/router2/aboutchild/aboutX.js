import React from 'react';
import {Link} from 'react-router-dom';
import About1 from './aboutA'
import About2 from './aboutB'
import About3 from './aboutC'
import About from '../about';
class AboutX extends React.Component {
    render() { 
        let {match:{params:{id}}} = this.props;
        let temp = '';
        switch(id){
            case 'a':
                temp = <About1 />
            break;
            case 'b':
                temp = <About2 />
            break;
            case 'c':
                temp = <About3 />
            break;
            default:
                temp = <About1 />
            break;
        }
        return (
            <div>
                <About />
                {temp}
            </div>
        )
    }
}
 
export default AboutX;