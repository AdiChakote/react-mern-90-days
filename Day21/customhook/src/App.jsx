import { useState } from "react";
import CounterControl from "./components/CounterControl";
import useCounter from "./components/useCounter";
import "./App.css";

function App() {
  const { count, increment, decrement } = useCounter(0);
  const [text, setText] = useState("");

  console.log("App Rendered");

  return (
    <>
      <h1>Count: {count} </h1>
      <CounterControl onIncrement={increment} onDecrement={decrement} />
      <input
        type="text"
        placeholder="type here...."
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default App;
