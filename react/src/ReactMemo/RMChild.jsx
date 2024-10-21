import React from 'react'

const RMChild = ({name}) => {
  console.log("child rendering");
  
  return (
    <div>RMChild_____
      <h1>{name}</h1>
    </div>
  )
}

export default RMChild

export const MemoizedChild = React.memo(RMChild)