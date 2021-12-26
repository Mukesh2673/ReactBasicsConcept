import { useState } from "react"
import React from 'react'
function Test(){
    //display input value
    const [data,setData]=useState(null)
   const [print,setPrint]=useState(false)
    function getData(e){
    setData(e.target.value)
}

return(
<div className="App">
{
print?
<h1>{data}</h1>
:null
}

<input type="text" onChange={getData}/>
<button onClick={()=>{setPrint(true)}}>print</button>


</div>
);

}
export default Test