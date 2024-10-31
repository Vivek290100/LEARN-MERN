import React from 'react'

const Child = ({handleClick}) => {

  console.log("child rendering");
  
  return (
    <>
    <div>Child</div>
    </>
  )
}

export default Child

export const MemoizedChild = React.memo(Child)