// import React, { useState } from "react";
// import useParent from "./CustomHook";

// const UseCustomHook = () => {
//   const {count,increment,decrement} = useParent()

//   return(
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>inc</button>
//         <button onClick={decrement}>dec</button>
//     </div>
//   )

// };

// export default UseCustomHook;

import React from 'react'
import useCustom from './CustomHook'
const UseCustomHook = () => {
  const {count, increment, decrement} = useCustom()
  return (
    <>
    <div>UseCustomHook</div>
    <h1>{count}</h1>
      <button onClick={increment}>inc</button>
    <button onClick={decrement}>dec</button>
    </>
  )
}

export default UseCustomHook


