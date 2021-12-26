import React, { Component } from 'react';
class Test extends Component {
    componentWillUnmount(){
        alert('componetwillunmount')
    }
    render() {
        return (
            <div>
                <h1>Component will Unmount</h1>
                
            </div>
        );
    }
}

export default Test;