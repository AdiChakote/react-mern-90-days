import { useReducer } from "react";
import LightButton from "./LightButton";

const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case "TURN_ON":
      return true;
    case "TURN_OFF":
      return false;
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
}

function Light() {
  const [isOn, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Light Turn On & Off Project</h1>
      <p>Light is {isOn ? "On" : "Off"}</p>
      <LightButton dispatch={dispatch} isOn={isOn} />
    </>
  );
}

export default Light;
