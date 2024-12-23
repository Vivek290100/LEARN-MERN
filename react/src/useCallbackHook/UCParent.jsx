import React, { useCallback, useState } from 'react'
import {MemoizedChild} from './UCChild';

const UCParent = () => {
  const [count,setCount] = useState(0)
  const [value, setValue] = useState(5)
  
  const handleClick = ()=>{
    setValue(prev=>prev+1)
  }
  const MemoizedFun = useCallback({
    handleClick
  },[value])
  console.log("parent rendering",count);
  
  return (
    <>
    <div>Parent component</div>
    <button onClick={()=>setCount(prev=>prev+1)}>increment1</button><br />
    <button onClick={handleClick}>increment5</button><br />
    <h1>{count}</h1>
    <h1>{value}</h1>
    <MemoizedChild handleClick={MemoizedFun}/>
    </>
  )
}

export default UCParent