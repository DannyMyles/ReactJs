import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckUserLogedIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
   render() {
    return(
      this.state.isLoggedIn ?(
      <div> Welcome Danny</div>
      ):
      (   <div> Welcome Guest</div>)
    )}
  //   let message 
  //   if (this.state.isLoggedIn){
  //     message = <div>
  //       Welcome Danny
  //     </div>
  //   }else{
  //      return <div>Welcome Visitor</div>
  //     }
  //     return <div>{message}</div>
  // } 
}

export default CheckUserLogedIn
//Conditional randering
// Logging validation message
// if/else statement do work in the Jsx
// Element variable approach


//USE EITHER
//Ternary Approach can be used inside the jsx
//  return(this.state.isLoggedIn ?( <div> Welcome Danny</div> ): (<div> Welcome Guest</div>))}

// Short circuit operator
//return this.state.isLogedIn && <div>Welcome Danny</div>