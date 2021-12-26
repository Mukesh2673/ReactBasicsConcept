//within component we need to use state rather than variable
import React, { useState } from 'react'
function Statee(){
    const [data,setData]=useState(0)
    return(
        <div>
        <h1>{data}</h1>
        <button onClick={()=>{
           setData(data+1)
        }}>update Record</button>
        </div>

    );

}
export default Statee