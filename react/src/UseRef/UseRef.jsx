import React, { useRef, useState } from 'react'

const UseRef = () => {
    const ChangeColor = useRef(null)
    const [color, setColor] = useState("red")

    const handleColor = () =>{
        if(ChangeColor){
            ChangeColor.current.style.background = color
            setColor((prev)=>prev==="red"?"yellow":"red")
        }
    }

  return (
    <>
    <div>UseRef</div>
    <h1 onClick={handleColor}>click</h1>
    <h1 ref = {ChangeColor}> colorrrrrrrrr</h1>
    </>
  )
}

export default UseRef