import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)
    const memoizedvalue = useMemo(()=>{
        console.log("calculation running",count);
        
        return count
    },[count])

    console.log("value",value);
    

  return (
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>setCount</button>
        <h1>{memoizedvalue}</h1>
        <button onClick={()=>setValue(prev=>prev+1)}>setValue</button>
        <h1>{value}</h1>
    </div>
  )
}

export default UseMemoHook