import React,{useState} from 'react';

const Test = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mobile,setMobile]=useState("");
function saveUser(){
    console.log({name,email,mobile});
 /*    let data={name,email,mobile}
    fetch("htelljlfldlkfdkl",{
        method:'POST',
        header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:{

        }
    })
 */}




    return (
        <div>
            
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /><br/><br/>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" /><br/><br/>
            <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /><br/><br/>
            <button type="button" onClick={saveUser}>Save New User</button>
        </div>
    );
};

export default Test;