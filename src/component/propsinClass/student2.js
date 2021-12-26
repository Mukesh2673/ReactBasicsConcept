import React from 'react'
class Student2 extends React.Component{
    render(){
        return(
            <div>
                <h1>Student class</h1>
            <h1>message from Student</h1><br/>
            <p>
            {this.props.Message}</p>
            
            </div>
        );

    }
}
export default Student2;