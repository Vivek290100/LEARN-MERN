// import React, { useRef } from 'react';

// const ChangeTextColor = () => {

//   const textRef = useRef(null);

//   const changeColor = () => {
//     if (textRef.current) {
//       textRef.current.style.color = 'blue';
//     }
//   };

//   return (
//     <div>
//       <p ref={textRef}>This is some text whose color will be changed.</p>
//       <button onClick={changeColor}>Change Text Color</button>
//     </div>
//   );
// };

// export default ChangeTextColor;



import { useEffect, useRef, useState } from "react";
function Counter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <p>Render Count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
