import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './PersonList';

function NameList() {
    const persons=[
        {
        id:1,
        name:'Danny',
        age:'25',
        skills:'React'
        },
        {
            id:2,
            name:'Myles',
            age:'23',
            skills:'Angular'
        },
        {
            id:3,
            name:'Muhadi',
            age:'22',
            skills:'Python'
        },
        {
            id:4,
            name:'Wawire',
            age:'21',
            skills:'Java'
        },
        
    ]

    const personList = persons.map(person => (
    <PersonList key={person.id} perso={person}/>
    ))

  return (
    <div><h2>{personList}</h2></div>
  )
}

export default NameList

// Note that I have created an array of names first
// used the map method to print the names
// the map method takes in a function as an argument here we use the arrow function
// The syntax is the parametor, fat arrow then the function body
//NameList is only responsible for rendering list
//Keys help in aupdating the UI
//Keys check which items have changed, removed or added