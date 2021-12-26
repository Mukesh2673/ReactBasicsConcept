import React from 'react';
import {withRouter} from 'react-router-dom'
const User = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            <h1>user component</h1>
            <h2>this is user number{props.match.params.id}</h2>
        </div>
    );
};

export default withRouter(User);