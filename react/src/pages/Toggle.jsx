import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }
  return (
    <div>
        <h1>{toggle? "ON" : "OFF"}</h1>
        <button onClick={handleToggle}>click</button>
    </div>
  )
}

export default Toggle