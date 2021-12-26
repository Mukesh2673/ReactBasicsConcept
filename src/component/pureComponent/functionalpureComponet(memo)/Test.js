import React,{useState,useMemo} from 'react'
function Test(){
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
   const mukeshMemo=useMemo(function multiCount()
   {
       console.log('multicount')
       return count*5
  //this function will call only count state value will change
    },[count])
/* 
without use memmo
function multiCount()
{
    console.log('multicount')
    return count*5
} */

//without use memo this multicount function will called each and every new update
//so to stop this calling we can use usememo hook and 

return(
<div className="App">
<h1>Use memo in React</h1>
<h1>Count:{count}</h1>
<h2>Item:{item}</h2>
<h2>{mukeshMemo}</h2>
<button onClick={()=>setCount(count+1)}>Update Count</button>
<button onClick={()=>setItem(item+1)}>Update Item</button>
</div>
)


}
export default Test;