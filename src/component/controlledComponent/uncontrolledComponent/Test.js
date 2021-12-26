import React,{useRef} from 'react';

const Test = () => {
let inputRef=useRef(null)
let inputRef2=useRef(null)
function submitForm(e){
e.preventDefault();
console.log("input field one value",inputRef.current.value)
console.log("input field one value",inputRef2.current.value)
//controlled by state
let input3=document.getElementById('input3').value
console.log("input field 3 value",input3);
}

    return (
        <div className="App">
            <h1>Uncontrolled Component</h1>
         <form onSubmit={submitForm}>
             <input type="text" ref={inputRef}/><br/>
             <input type="text" ref={inputRef2}/><br/>
             <input type="text" id="input3"/><br/>
             <button>Submit</button>
         </form>
        </div>
    );
};

export default Test;