import React,{useEffect,useState} from 'react'
function Test(){
    const [count,setcount]=useState(0)
    const [data,setdata]=useState(10)
    useEffect(()=>{
        console.log("useEffect")
    },[data])
    //if we use[data] then this useEffect hook will depend only on data state if it change then this hook will call
    return(
        <div>
            <h1>useEffect in count{count}</h1>
            <h1>useEffect in data{data}</h1>
            <button onClick={()=>setcount(count+1)}>Count</button>
            <button onClick={()=>setdata(data+1)}>data</button>
        </div>
    );
}
export default Test
//use effect function run every state change because it hold all life cycle method we can use this hook with conditionj useEffect(()={},[put here your conditon])
//we can use this hook in multiple times

