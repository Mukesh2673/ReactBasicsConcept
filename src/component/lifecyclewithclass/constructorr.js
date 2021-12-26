//in life cycle method constructor is call in first so constructor is call first then render
import React from 'react'
class Test extends React.Component{
constructor()
{
    super();
    console.log('constructor');
    this.state={
        data:1
    }
}
shouldComponentUpdate(){
    return false; //it is by default to block the state to render if we put return true then it will allow to render state to update
  if(this.state.data>5){
      return true;//we can use this state to block perticular life cycle method
  }
}
render(){
    console.log('render');
    return(
        <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>{this.setState({data:this.state.data+1})}}>Add</button>
        </div>
    )
}

componentDidMount(){
    console.log("componentdidMount") //this will not call if state change props change because it call when component is mount (born)
}
componentDidUpdate(){
    console.log("componentdidupdate");//never update any state propse within it because if we do it will make an infinite loop
}



}
export default Test