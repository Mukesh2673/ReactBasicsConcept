import React  from "react"
import Test from './childuser'
function parentAlert()
{
    alert("Hello from parent");
}
function Test2()
{

    function childAlert(data){
        alert(data.name+'->came from chilf');
    }




    return(
        <div>
            <h2>Lifition state up</h2>
            <Test alert={parentAlert} alert2={childAlert}/>
           

        </div>
        )
}
export default Test2