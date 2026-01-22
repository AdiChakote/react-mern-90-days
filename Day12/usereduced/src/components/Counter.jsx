import { useReducer } from "react";
import CounterButton from "./CounterButton";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return 0;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {count}</h1>
      <CounterButton dispatch={dispatch} count={count} />
    </>
  );
}

export default Counter;
