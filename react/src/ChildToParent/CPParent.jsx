import React, { useState } from 'react'
import Child from './CPChild'

const CPParent = () => {
  const [name, setName] = useState("")
  const childData = (data) =>{
    setName(data)
  }
  return (
    <div>
      <h1> hii{name}       !</h1>
        <div>Parent Component</div>
        <Child getdatafromchild = {childData}/>
    </div>
  )
}

export default CPParent