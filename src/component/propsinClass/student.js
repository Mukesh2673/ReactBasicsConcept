import React from 'react'
import Student2 from './student2'
class Student extends React.Component{
    render(){
        return(
            <div>
                <h1>Student class</h1>
                    <Student2 Message="hello this is from Student2"/>
                </div>
        );

    }
}
export default Student;