function LightButton({ dispatch, isOn }) {
  return (
    <>
      <button onClick={() => dispatch({ type: "TURN_ON" })} disabled={isOn}>
        On
      </button>
      <button onClick={() => dispatch({ type: "TURN_OFF" })} disabled={!isOn}>
        Off
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>
    </>
  );
}

export default LightButton;
