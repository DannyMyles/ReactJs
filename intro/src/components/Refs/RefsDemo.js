import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef= null
      this.steCbRef= (element)=>{
        this.cbRef=element
      }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <label for="">User</label>
        <input type="text" ref={this.inputRef}  />
        <input type="text" ref={this.steCbRef}  />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo

// Make the Input field to focus
//1:: Create Ref using React.create ref method
//Create refs in the constructor for refrencing thought the component
//2:: Attach the ref to the input element use the recervedref attribute
// The refs helps to focus on an input field
// React also supports a callback ref

// Call back refs approach
// 1:: Create ref using a property and assign a prop of null
// ie this.cbRef= null
// 2 :: Create a method that will assign DOM element to the ref assigned in step1
// 3:: Attch the ref to the input element
