// import React, { useState } from "react";

// const useParent = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//      setCount(prev => prev + 1);
//   };
//   const decrement = () => {
//      setCount(prev => prev - 1);
//   };
//   return { count, increment, decrement };
// };

// export default useParent;


import React, { useState } from 'react'

const useCustom = () => {
   const [count, setCount] = useState(0)

   const increment = () =>{
      setCount((prev)=>prev+1)
   }
   const decrement = () =>{
      setCount((prev)=>prev-1)
   }
   return {count, increment, decrement}
}

export default useCustom