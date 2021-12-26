import React from 'react'
class Statee extends React.Component{
  constructor()
  {
      super();
      this.state={
          data:1
      }
  }



    render(){ 
    return(
        <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>{this.setState({data:this.state.data+1})}}>Update</button>
        </div>

    )
   }
}
export default Statee