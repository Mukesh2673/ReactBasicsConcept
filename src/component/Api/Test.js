import React from 'react';
import { useEffect,useState } from 'react';

const Test = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5").then((result)=>{
            result.json().then((resp)=>setData(resp))
        })
    },[])
    console.log(data);
    return (
        <div>
            <h1>title from json api</h1>
            Component!

        {
            data.map((item,i)=>
            <div key={i}>
                <h1>{item.title}</h1>
           </div>)
        }


        </div>

    );
};

export default Test;