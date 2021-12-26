import React from 'react';
import { CommonContext } from './CommonContext';

const UpdateButton = () => {
    return (
        <CommonContext.Consumer>
            {
                ({updateColor})=>(
                    <button onClick={()=>updateColor('yellow')}>Update Color</button>
                )


            }
        </CommonContext.Consumer>
    );
};

export default UpdateButton;