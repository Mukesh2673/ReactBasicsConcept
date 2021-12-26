import React, { Component } from 'react';

import {CommonContext} from './CommonContext'
import UpdateButton from './updateButton'
import Main from './Main'
class Test extends Component {
    constructor(){
        super()
        this.updateColor=(color)=>{
            this.setState({
            color:color
            })
        }



        this.state={
            color:"green",
            updateColor:this.updateColor
        }

    }
    render() {

        return (
            <CommonContext.Provider value={this.state}>
                <h1>Complete and easy example for Contex Api</h1>
            <Main />
            <UpdateButton />
            </CommonContext.Provider>
        
        );
    }
}

export default Test;