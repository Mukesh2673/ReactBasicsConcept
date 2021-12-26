import React from 'react'
//import Student from './student'
function Student2(props){
    {console.log(props)}
    return(
        <div>
   
       <h2>This is reciver<br/>
       Message is-{props.message}</h2>
        </div>
    );
}
export default Student2;