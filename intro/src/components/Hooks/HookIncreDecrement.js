import React, {useState} from 'react'

function HookIncreDecrement() {
    const initialCount = 0;
    const [count, setCount]= useState(initialCount)

    const incrementFive =()=>{
      for(let i = 0; i<5; i++){
        setCount(previousCount =>previousCount + 1)
      }
    }
  return (
    <div className='p-3'>
        Count={count}
        <button className='m-auto' onClick={()=>setCount(initialCount)}>Reset</button>
        <button className='m-2' onClick={()=>setCount(previousCount =>previousCount + 1)}>Increment</button>
        <button className='m-2' onClick={()=>setCount(previousCount =>previousCount - 1)}>Decrement</button> 
        <button className='m-2' onClick={incrementFive}>Increment 5</button>        
    </div>
  )
}

export default HookIncreDecrement