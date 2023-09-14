import React, { useState } from 'react';

const FunctionCounter = () => {
  
  const [count, setCount] = useState(121);
  
  return (
    <div>
      <h1>FUNCTIONAL COUNT</h1>
      <h1>COUNT</h1>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 13)
      }}>Increase Count</button>
      <button onClick={() => {
        setCount(count - 90)
      }}>Decrease Count</button>
    </div>
  );
};

export default FunctionCounter;
