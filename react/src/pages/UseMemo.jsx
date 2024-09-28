import React, { useState, useMemo } from "react";

// Expensive calculation function
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 3; i++) {} // Simulating a heavy computation
  return num * 2;
};

const MyComponent = () => {
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);

  // Memoizing the result of expensiveCalculation
  const computedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]); // This only recomputes if `number` changes

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
