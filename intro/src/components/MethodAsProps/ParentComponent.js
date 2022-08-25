import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
        }
    //Event binding happens inside the constructor
    this.greetParent=this.greetParent.bind(this)
      
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent

// When we want to share the props from child to parent we have to use methods
// use rconst snippest to create a constructor
// using template literals (` ${this.state.parentName}`)