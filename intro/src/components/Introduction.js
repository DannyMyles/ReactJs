import React from 'react'

function Introduction(props) {   
    console.log(props)
  return (
    <div>
        <h1>Hello {props.name} you are a {props.heroName}</h1>
    </div>

  )
}

export default Introduction
        //PROPS
// components are reusable
// Props (Property) is the optional input that a component can accept
// Props allow inputs to be dynamic
// In class component you use the this key word to acces components
// Props is an object
// Props are immutable, their values cannot be changes


//STATE
// Both state and props hold information that influences the appearance of the UI
