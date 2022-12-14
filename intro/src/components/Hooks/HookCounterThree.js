import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })
  return (
    <form className='m-3'>
        <input className='p-2 m-2' type="text" name="" value= {name.firstName} onChange={e => setName({...name, firstName:e.target.value})} />
        <input className='p-2'  type="text" name="" value={name.lastName} onChange={e => setName({ ...name, lastName:e.target.value})}  />
        <h2> Your first name is {name.firstName}</h2> 
        <h2>Your last name is {name.lastName} </h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree