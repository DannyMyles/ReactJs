import React, { Component } from 'react'

export default class Destructure extends Component {
  render() {
    const {name,heroName}= this.props
    //const {state1,state2} = this.state ---------This is how we dostructure state
    return (
      <div>Welcome {name} {heroName}</div>
    )
  }
}
