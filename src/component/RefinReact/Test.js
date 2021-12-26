import React, { Component,createRef } from 'react';

class Test extends Component {
  constructor(){
      super();
      this.inputmukeshRef=createRef();
  }
  componentDidMount(){
      console.log(this.inputmukeshRef.current.value="10000")//set value 1000 in input field
  }
  getVal(){
console.log(this.inputmukeshRef.current.value)
this.inputmukeshRef.current.style.color="red" //set color to red
  }
    render() {
        return (
            <div>
                <h1>Ref in React</h1>
                <input type='text' ref={this.inputmukeshRef}/>
                <button onClick={()=>this.getVal()}>getInput value</button>  {/* get input field value. on button click */}
            </div>
        );
    }
}

export default Test;
