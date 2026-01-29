import { memo } from "react";

function CounterControl({ onIncrement, onDecrement }) {
  console.log("Counter Control Rendered");

  return (
    <>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
}

export default memo(CounterControl);
