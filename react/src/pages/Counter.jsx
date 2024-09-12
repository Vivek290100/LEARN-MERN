import React, { useEffect, useState } from 'react'

const Counter = () => {
    const  [count, setCount] = useState("1")
    const handleCLick = ( ) => {
        alert("button Clicked")
    }

    function handleClickk(event) {
      // `event` is a SyntheticEvent
      throw new Error("error occured")
      console.log(event.nativeEvent);  // Access the underlying native event
    }
    
    useEffect(() => {
      handleClickk()
    }, [])
    
  return (
    <>
    <div>
        {count} 
    </div>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={handleCLick}>alert</button>
    <button onClick={handleClickk}>synthetic event</button>
    </>
    
  )
}

export default Counter