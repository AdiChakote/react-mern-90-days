import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("Running Slow Function");
  let result = 0;
  for (let i = 0; i <= 100000; i++) {
    result += num;
  }
  return result;
}

function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const calculatedValue = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <h2>Calculated Value: {calculatedValue} </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>
        Re-render (Count: {count}){" "}
      </button>
    </>
  );
}

export default UseMemoDemo;
