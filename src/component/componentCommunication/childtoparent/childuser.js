import React  from "react"
function Test(props)
{
  const  data={name:"Mukesh"}
    return(
        <div>
            <h2>this is child component</h2>
            <button onClick={props.alert}>click to call parent from child</button>
            <button onClick={()=>props.alert2(data)}>send data to child </button>
        </div>
        )
}
export default Test