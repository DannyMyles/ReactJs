import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()
        this.state = {
            message:"Welcome Visitor"
        }
    }
    
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}
export default  Message


// Adding a subscribe button to class with subscribtion
// Super method is required for extends
//listen to the click event
// We created an event handler changeMessage. on click of this the massage will change
// A state is maintained in the constructor function
// State can be changed within the componet
//setState method is used to set the state in the component