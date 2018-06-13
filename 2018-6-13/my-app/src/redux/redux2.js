import React from 'react';
class App extends React.Component {
    add = () => {
        let {store:{dispatch}} = this.props;
        dispatch({type:"ADD",payload:1});
    }
    minus = () => {
        let {store:{dispatch}} = this.props;
        dispatch({type:"MINUS",payload:1});
    }
    render() { 
        let {store} = this.props;
        return (
            <div>
                <button
                    onClick={this.minus}
                >-</button>
                <span>{store.getState()}</span>
                <button
                    onClick={this.add}
                >+</button>
            </div>
        )
    }
}
 
export default App;