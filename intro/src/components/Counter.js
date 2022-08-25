import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    addCount(){
        this.setState(
            {
            count:this.state.count + 1
            },
            ()=>
            {
                console.log('Callback Value', this.state.count)
            }
        )
        console.log(this.state.count)
    }
  render() {
    return (
        <div>
            <div>
                <div> Count - {this.state.count}</div>
                <button onClick={()=> this.addCount()}>Increament</button>
            </div>
        </div>
      
    )
  }
}


// do not modify the state directly, instead use the setState
// Whenever you need to execute some code after the state has been changed,do not place the code right after the setState method
// Instead, place the state place the code within the call back function