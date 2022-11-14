import { useState } from "react";
import "./App.css";

import logo from "./logo.svg";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{count}</h1>
      </header>
      <button onClick={() => setCount((x) => x + 1)}>Cli参考me！</button>
    </div>
  );
};

export default App;
