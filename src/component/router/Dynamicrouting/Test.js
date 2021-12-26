import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
const Test = () => {
    let users=[
        {id:1,name:'mukesh',email:'mkesh@fm'},
        {id:2,name:'bdfaukesh',email:'fsdamkesh@fm'},
        {id:3,name:'masdfukesh',email:'adsfmkesh@fm'},
        {id:4,name:'madukesh',email:'asdmkesh@fm'},
        {id:5,name:'mfqwukesh',email:'zxcvmkesh@fm'},
        {id:6,name:'zddmukesh',email:'zxvcmkesh@fm'},



    ]


    return (
        <div>
            <Router>
            <h1>React Dynamic Routing</h1>
            {
                users.map((item)=>
                <div><Link to={"/user/"+item.id}><h3>{item.name}</h3></Link></div>)
                
            }

            <Route path="/user/:id"><User/></Route>
            </Router>            </div>
    );
        }


export default Test;