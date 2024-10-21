import React, { useState } from "react";
import useParent from "./CustomHook";

const UseCustomHook = () => {
  const {count,increment,decrement} = useParent()

  return(
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
    </div>
  )

};

export default UseCustomHook;
