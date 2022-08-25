import React, { Component } from 'react'

class ClassClickEvent extends Component {
    clickHandler(){
        console.log('You Clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    )
  }
}

export default ClassClickEvent
// In the class component the eventhandler function is accessed by the this keyword