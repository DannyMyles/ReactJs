import React, { Component } from 'react'
import axios from 'axios'

export class PostLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         error:""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg: "Retriving Data"})
        })

    }
  render() {
    const {post,errorMsg} = this.state 
    return (
      <div>
    List of Posts
    { post.length? post.map(post => <div key={post.id}>{post.title}</div>):
    null
    }
    { errorMsg?  <div >{errorMsg}</div>:
    null
    }
      </div>
    )
  }
}

export default PostLists