// import React, { useState, useCallback } from 'react';

// // Button component
// const Button = React.memo(({ handleClick }) => {
//   console.log('Button rendered');
//   return <button onClick={handleClick}>Click Me</button>;
// });

// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   // Memoize the handleClick function so it's not recreated on every render
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); // handleClick only changes when count changes

//   return (
//     <div>
//       <h1>useCallback Example</h1>
//       <Button handleClick={handleClick} />
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default MyComponent;




import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // Memoizing the increment function using useCallback
  const incrementCount = useCallback(() => {
    console.log("incrementCount");
    setCount((prevCount) => prevCount + 1);
  }, []); // This function doesn't depend on any external variables

  // This function updates the number state
  const updateNumber = (e) => {
    console.log("updateNumber");
    
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      <h1>useCallback Example</h1>
      <input
        type="number"
        value={number}
        onChange={updateNumber}
        placeholder="Enter a number"
      />
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default MyComponent;

