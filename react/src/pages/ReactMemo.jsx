import React, { useState } from 'react';

// Child component
const ChildComponent = React.memo(({ name }) => {
  console.log('ChildComponent rendered');
  return <h2>Hello, {name}!</h2>;
});

// const ChildComponent = (({ name }) => {
//     console.log('ChildComponent rendered');
//     return <h2>Hello, {name}!</h2>;
//   });

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <h1>React.memo Example</h1>
      <ChildComponent name="Vivek" /> 
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}; 

export default ParentComponent;
