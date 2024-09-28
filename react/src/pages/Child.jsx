import React from 'react'

const Child = ({getDataFromChild}) => {
  const data = "data from child"
  return (
    <div>
      <button onClick={()=>getDataFromChild(data)}>click</button>
    </div>
  )
}

export default Child