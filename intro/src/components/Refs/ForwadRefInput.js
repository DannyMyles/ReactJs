import React from 'react'

// function ForwadRefInput() {
//   return (
//     <div>
//       <input type="" name="" value="" />
//     </div>
//   )
// }

const ForwadRefInput = React.forwardRef((props,ref)=>{
  return(
    <div>
      <input type="" ref={ref} />
    </div>
  )
})

export default ForwadRefInput

//Forwarding Refs is a technique used for automacally passing a ref through a components to one of its children