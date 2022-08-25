import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const {count,increamentCount}=this.props
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hovered {count} time</h1>
      </div>
    )
  }
}

 export default withCounter(HoverCounter,5) 

// We need to distructure the count and incrementCount functionality in the render function




