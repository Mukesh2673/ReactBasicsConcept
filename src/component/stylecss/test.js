import './style.css'
import style from './custum.module.css'
import React, { Component } from 'react';
function Test(){
    return(
        <div className="App">
            <h1 className="primary">Style type 1 in React js</h1>
            <h1 style={{color:'red',backgroundColor:"black"}}>style type 2  <i class="fa fa-css3" aria-hidden="true"></i></h1>
{/* //do not use background-color because in jsx we only use camel case */}
<h1 className={style.success}>style type 3 <i class="fa fa-css3" aria-hidden="true"></i></h1>

        
        </div>
    );
}
export default Test;
