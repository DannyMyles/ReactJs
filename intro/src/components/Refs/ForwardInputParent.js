import React, { Component } from 'react'
import ForwadRefInput from './ForwadRefInput'

class ForwardInputParent extends Component {
    constructor(props) {
      super(props)
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div className='container m-auto'>
        <ForwadRefInput  ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ForwardInputParent