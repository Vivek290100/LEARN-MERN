import React, { useState } from 'react'

const CounterApp = () => {
    const [color, useColor] = useState("yellow");
    const [visible, setVisible] = useState("visible");
  
    const click = () => {
      useColor(color == "yellow" ? "green" : "yellow");
    };
    const hiddenClick = () => {
      setVisible(visible === "visible" ? "hidden" : "visible");
    };
  
    const [count, setCount] = useState(0);
  
    const ClickCount = () => {
      setCount(count + 1);
    };
    const Decrease = () => {
      if(count>0){
        setCount(count - 1);
      }
    };
    const Reset = () => {
      setCount(0);
    };
  
    return (
      <>
      <div className="App ">
        <button
          onClick={click}
          style={{
            backgroundColor: color == "yellow" ? "green" : "yellow",
          }}
        >
          change color
        </button>
        <button onClick={hiddenClick}>
          {visible === "visible" ? "Hide" : "Show"}
  
        </button>
        <div
          className="colors"
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: color,
            visibility: visible,
            
          }}
        ></div>
  
        <button onClick={ClickCount}>increase</button>
        <button onClick={Decrease}>decrease</button>
        <button onClick={Reset}>reset</button>
        <h1>{count}</h1>
      </div>
      </>
      
    );
}

export default CounterApp