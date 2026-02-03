import { useState } from "react";

function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Crash");
  }

  return (
    <>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default BuggyComponent;
