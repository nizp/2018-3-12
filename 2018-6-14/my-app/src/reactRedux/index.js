import React,{Component} from 'react';

import GWC from './gwc';
import SG from './sg';
import DN from './dn';

class App extends Component {
    render() { 
        return (
            <div>
                <GWC />
                <SG />
                <DN />
            </div>
        )
    }
}
 
export default App;