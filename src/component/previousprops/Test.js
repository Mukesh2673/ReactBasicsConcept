import React from 'react';
import User from './User'
function Test(){
    const[count,setCount]=React.useState(0)
    return (
        <div className='App'>
        <User count={count}/>
        <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update counter</button>
        </div>
    );
};

export default Test;