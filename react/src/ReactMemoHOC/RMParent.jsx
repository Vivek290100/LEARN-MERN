import React, { useState } from 'react'
import {MemoizedChild} from './RMChild';

const RMParent = () => {
  const [value ,setVale] = useState(0)
  const [name, setName] = useState("vivek")
  console.log("parent rendering");
  
  return (
    <div>
      <h1>RMParent</h1>
        <h1>{value}</h1>
        <button onClick={()=>setVale(prev=>prev+1)}>click </button><br />
        <button onClick={()=>setName("name changed")}>change name</button>
        <MemoizedChild name={name}/>
    </div>
  )
}

export default RMParent