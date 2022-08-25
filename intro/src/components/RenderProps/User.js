import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:0
      }
    }
  render() {
    return (
      <h2>{this.props.name(true )}</h2> // the true argument is passed to check the truhy of the statement
    )
  }
}

export default User

// We have passed in the name prop as a function as it was defined in the App.js