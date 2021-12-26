import React,{useState} from 'react';

const Test = () => {
    const[count,setCounter]=useState(1)
    function updateCounter(){
        let rand=Math.floor(Math.random()*10)
        setCounter((pre)=>{console.log(pre)//get previous state value
            if(pre-rand<5)
            {
                alert("topup")//diff between previous value to new value
            }
        
            return rand})
        }
    
    
    
    return (
        <div>
            Component!
            <h1>{count}</h1>
            <button onClick={updateCounter}>Click to Update</button>
        </div>
    );
};

export default Test;