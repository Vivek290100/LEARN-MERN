import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ number }) => {
  const computeExpensiveValue = (num) => {
    console.log("Computing expensive value...");
    return num * 2; // Example of an expensive calculation
  };

  // Use useMemo to memoize the computed value
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
      <ExpensiveComponent number={number} />
    </div>
  );
};

export default ParentComponent;
