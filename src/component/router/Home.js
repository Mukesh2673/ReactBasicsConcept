import React, { useState } from 'react';
import Router from 'router-dom';

const Home = () => {
    
    return (
        <div className="App">


             <Router>
            <Link to="/home">Home Page</Link>
            <Link to="/about">about Page</Link>
            <Route path="/home"><Home1/></Route>    
            <Route path="/about"><About/></Route>    
            </Router>   
        </div>
    );
};
function Home1(){
return(
<div>
<h1>Home Page</h1>
<p>this is home Page</p>

</div>
)
}
function About(){
    return(
    <div>
    <h1>About Page</h1>
    <p>this is About Page</p>
    
    </div>
    )
    }

export default Home;