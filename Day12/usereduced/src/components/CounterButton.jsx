function CounterButton({ count, dispatch }) {
  return (
    <>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button
        disabled={count === 0}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
}

export default CounterButton;
