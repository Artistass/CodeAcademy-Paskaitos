import React, { useRef, useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  function handleClick() {
    prevCountRef.current = count;
    setCount(count + 1);
  }

  return (
    <div
    style={{marginTop: "50px"}}>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ClickCounter;
