import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div className="example-container">
      <h2>useState</h2>
      <p>This is a counter {count}</p>
      <button onClick={() => setCount(count + 1)}>aument</button>
    </div>
  );
}

export default UseState;
