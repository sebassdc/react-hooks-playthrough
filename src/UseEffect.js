import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter - ${count}`;
  });
  return (
    <div className="example-container">
      <h2>useEffect</h2>
      <p>This is a counter {count}</p>
      <button onClick={() => setCount(count + 1)}>aument</button>
    </div>
  );
}

export default UseEffect;
