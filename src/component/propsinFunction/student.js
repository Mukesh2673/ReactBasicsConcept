import React from 'react'
import Student2 from './student2'
function Student(){
return(
    <div>   
    <h1>this is sender Component</h1>
   <Student2 message={"please recieve message"} other={{address:'tehri',mobile:'2333',email:'abc@gmail.com'}}/>
    </div>
 
);


}
export default Student;