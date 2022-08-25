import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
    }
    handleUsernameChange =event=>{
        this.setState({
            username: event.target.value
        }) 
    }
    handleonChangeComments = event =>{
            this.setState({  comments:event.target.value
            })
        }
    handleOnTopicChange =event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDafault()
    }

  render() {
    const {username,comments,topic} =this.state
    return (
        <form className='p-3 m-3 form' onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="" value={username} onChange={this.handleUsernameChange} />
            </div>
            <div className='p-3 m-3'>
                <label >Comments</label>
                <textarea  value={comments} onChange={this.handleonChangeComments}></textarea>
            </div>
            <div>
                <label>Topics</label>
                <select value={topic} onChange={this.handleOnTopicChange} >
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Python">Python</option>

                </select>
            </div>
            <div className='m-3'>
                <button className='btn btn-info' type="submit">Submit</button>
            </div>
        </form>
    )
  }
}

export default Form
//Create a controlled React form by
// 1:: Creating a state with a constuctor
// 2:: creating an onChange function

// Textarea
// 1:: Create an html tag, create a state functon passing in a textarea value
// 2:: Create an onchange function to handle change event
// 3:: Create a setState function

// Select Option
// 1:: Create HTML
// 2:: Assign the component state to the constructor
// 3:: Create a setState function to handle on change event, pass in the event a parameter

//Submit form data
// 1:: Create a handleSubmit function that will takes in alert in the function body
// 2:: Add an Onsubmit eventHandle to the form to prevent default submission
// 3:: Add event. function in the handleSubmit funtion