import React from 'react'
function Test(){
const student=['Anil','mukesh','cody','arun'];
const user=[
    {name:"Mukesh",email:"abc@gmail.com"},
    {name:"mayank",email:"mayank@gmail.com"}
]
student.map((t)=>console.log(t))
return(
    <div>  <div><h1>Handle Array with list</h1></div>
    <table>
        <tbody>       
         <tr>
        <td>Name</td>
        <td>Email</td>
        </tr>
        {
            user.map((item,i)=>
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
            </tr>)
        }
        </tbody>

    </table>
    </div>
  
);
}
export default Test;
//within return statement jsx we can not use for loop  while loop donot support  so we use map function