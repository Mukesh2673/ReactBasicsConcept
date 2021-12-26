
import React, {useRef} from 'react';

function Test() {
    let inputRef=useRef(null)
function handleInput(){
    console.log('function test')
    inputRef.current.value=100;//set input value to 100
    inputRef.current.focus(); //set focus on button click
    inputRef.current.style.color="red"
}
    return (
        <div>
<h1> UseRef in React</h1>
<input type="text" ref={inputRef}/>
<button onClick={handleInput}>Handle Input</button>
        </div>
    );
};

export default Test;