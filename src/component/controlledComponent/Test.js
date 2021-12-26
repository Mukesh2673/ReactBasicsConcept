import React,{useState}  from 'react';

const Test = () => {
    let [val,setval]=useState("")
    let [item,setItem]=useState("")
    return (
        <div>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
            {val}
        </div>
    );
};

export default Test;