import React, { useState } from 'react'
function Test(){
    const [status,setStatus]=useState(true)
    return(
        <div>
            {
                status ? <h1>Hello World</h1>:null
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>

        </div>
    );
}
export default Test;