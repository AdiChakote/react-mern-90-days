import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  console.log("Parent Rendered");

  const handleChildClick = useCallback(() => {
    console.log("Child Button Clicked");
  }, []);

  return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onChildClick={handleChildClick} />
    </>
  );
}

export default Parent;
