import React,{useRef} from 'react';
import Child from './child'
const Test = () => {
let inputRef=useRef(null);
function updateInput(){
    inputRef.current.value="1000"
} 
return (
        <div>
<Child ref={inputRef}/>
button is in parent component
<button onClick={updateInput}>Update Input</button>
        </div>
    );
};

export default Test;
