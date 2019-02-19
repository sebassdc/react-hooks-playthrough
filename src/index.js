import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import UseState from "./UseState";
import UseEffect from "./UseEffect";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseState />
      <UseEffect />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
