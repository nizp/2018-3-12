import React from 'react';
class List extends React.Component {
    render() { 
        let {txt} = this.props;
        return (
            <li>{txt}</li>
        )
    }
}
 
export default List;