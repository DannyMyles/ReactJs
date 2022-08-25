import React, { Component } from 'react'

class HooverCounterII extends Component {
  render() {
    const {count,incrementCount}=this.props //destructure
    return (
      <h1 onMouseOver={incrementCount}> Hovered {count} times </h1>
    )
  }
}

export default HooverCounterII