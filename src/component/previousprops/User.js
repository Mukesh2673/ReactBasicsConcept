import React,{useEffect,useRef} from 'react';

const User = (props) => {
    const lastval=useRef();//this run before useEffect so it store previous value
    useEffect(()=>{
        lastval.current=props.count
    })
    const previousProps=lastval.current
    return (
        <div>
User component current val<h1>  {props.count}</h1>
        <h2>previous val {previousProps}</h2>
        </div>
    );
};

export default User;