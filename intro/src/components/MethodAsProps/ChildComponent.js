import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function ChildComponent(props) {

  return (
    <div>
        <button className='btn btn-warning' onClick={()=> props.greetHandler('child')}>Greet Parent</button>
    </div>
  
  )
}

export default ChildComponent
//Use arrow functions to pass parameters from the child component to the parent component
// Add the onclick handler in the arrow function