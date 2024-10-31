import React from 'react'

const CPChild = ({getdatafromchild}) => {
  const handleClick = ()=>{
    const data = "Vivek"
    getdatafromchild(data)
  }
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick={handleClick}>send data</button>
    </div>
  )
}

export default CPChild