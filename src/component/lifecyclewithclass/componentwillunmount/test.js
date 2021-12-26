import React, { Component } from 'react';
import Test2 from './test2'
class Test extends Component {
 constructor()
 {
     super();
     this.state={
         show:true
     }
 }
 
 
    render() {
        return (
            <div>
                {
                  this.state.show ? <Test2/>:<h1>Child Component Removed</h1>
                }

                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child Component</button>
            </div>
        );
    }
}

export default Test;