import React from 'react'

function PersonList({person}) {
  return (
    <h2>I am {person.name}.I am {person.age} years old, and I am skilles in {person.skills}</h2>
  )
}

export default PersonList
//PersonList is responsible for rendering the person HTML