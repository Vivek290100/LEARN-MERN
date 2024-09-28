import React, { useRef, useState } from "react";

const New = () => {
  const changeColorRef = useRef(null);
  const [color, setColor] =  useState("yellow")

  const changeColor = () =>{
    if(changeColorRef.current){
        changeColorRef.current.style.backgroundColor = color

        setColor((previousColor)=> previousColor==="yellow"? "red" : "yellow")
    }
  }
  return (
    <div>
        <button ref={changeColorRef}>hiiiiiiiii</button>
        <button onClick={changeColor}>changeColor</button>
    </div>
  )
};

export default New;
