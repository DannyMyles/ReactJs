import React from 'react'

function FunctionClickEvent() {
    function clickHandler(){
        console.log('Button Clicked!')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClickEvent
//Event Handler is a function and not a function call thus do not add the parenthesis