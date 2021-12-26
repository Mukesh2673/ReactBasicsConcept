import React from 'react'
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';

function Test2(){
    
    return (
        <div className="App">


             <Router>
            <Link to="/home">Home Page</Link><br/><br/>
            <Link to="/about">about Page</Link>
            <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            
            <Route path="*" element={<PNF/>}></Route>
            
            </Routes>
            </Router>
            
            
        </div>
    );
};
function Home(){
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

    function PNF(){
        return(
        <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        
        </div>
        )
        }

export default Test2;