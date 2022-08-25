import React, { PureComponent } from 'react'

class PureComponet extends PureComponent {
  render() {
    return (
      <div>PureComponet</div>
    )
  }
}

export default PureComponet

// You can create a component class by extending a PureComponent class
// PureComponent class implements a shouldUpdate lifecycle 
// Use a regular components most of the time