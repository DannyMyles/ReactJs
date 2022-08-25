import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
  render() {
    const {count,increamentCount}=this.props
    return (
      <div>
        
        <button onClick={increamentCount}>
            {this.props.name}Click {count} time</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,10) 

//Higher Order Component
//This is a pattern where a function take a component as an arguments and return a new component
// ie ---------const NewComponent = HigherOrderComponente(OriginalComponent)
// HOC adds additional data to the original or functionality to the original content
// HOC help us to reuse code