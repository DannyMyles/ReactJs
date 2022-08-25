import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hi There'
      }
      //event binding inside the constructor
      this.clickHandler =this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message:'I hope you are fine'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}> Cick </button>
        </div>
    )
  }
}

export default EventBind

// USE THE FOLLOWING WAYS TO BIND EVENTS IN REACT
// 1:: Use the bind keyword to bind the handler in the render method and pass in this keyword
// This option works, every update to the function will cause the component to render

// 2:: Use arrow functions in the render method
//<button onClick={()=>this.clickHandler()}> Cick </button>
// This also has implecation

// 3:: Use the bind handler in the constructor rather than in the render method
//<button onClick={this.clickHandler}> Cick </button>
// This is the approach that is recommended in the official documentation

// 4:: Use the arrow fuction as the class property