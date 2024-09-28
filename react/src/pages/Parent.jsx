import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [childData, setChildData] = useState("")

  const dataFromChild = (data) =>{
    setChildData(data)
  }
  return (
    <div>
      <h2>{childData}</h2>
      <Child getDataFromChild={dataFromChild}/>
    </div>
  )
}

export default Parent