import React, { PureComponent } from 'react';

class Test extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render() {
        console.log("checkrender")
        return (
            <div className="App">
                <h1>Pure Component in React {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>
                    UpdateCount
                </button>
            </div>
        );
    }
}

export default Test;
/* 
//note by using pure component if we can stop rerendering in no changes in state props occurs
if changes invoke it render otherwise not render
in normal class componet if we set setState({count:1}) constant but every button click a componet will rerender 
so by using pure componet we can stop it */


5:57