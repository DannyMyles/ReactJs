import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
//create a ref using the create ref method
// create a clickHandler method to handle on button click