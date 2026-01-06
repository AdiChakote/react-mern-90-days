import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <p>Hey I'm Here !</p>}
    </>
  );
}

export default Toggle;
