import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1); // Initialize as a number

  const handleCLick = () => {
    alert('Button Clicked');
  };

  function handleClickk(event) {
    try {
      console.log(event.nativeEvent); // Access the underlying native event
      throw new Error('Error occurred');
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    try {
      handleClickk(); // This will throw an error but be caught
    } catch (error) {
      console.error('Error in useEffect:', error.message);
    }
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleCLick}>Alert</button>
      <button onClick={handleClickk}>Synthetic event</button>
    </>
  );
};

export default Counter;






// //Auto Increment Counter
// import React, { useState, useEffect } from 'react';


// const Counter = () => {

//   const [count, setCount] = useState(1);
//   const [direction, setDirection] = useState(1); 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => {
//         if (prevCount === 10) setDirection(-1);
//         if (prevCount === 1) setDirection(1); 
//         return prevCount + direction;
//       });
//     }, 500); 

//     return () => clearInterval(interval); 
//   }, [direction]);  

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//     </div>
//   );
// };

// export default Counter