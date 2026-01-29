import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={increment}>Increment</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Child onClick={increment} />
    </>
  );
}

export default Parent;
