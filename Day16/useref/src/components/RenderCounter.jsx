import { useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current++;

  console.log("Rendered:", renderCount.current);

  return (
    <>
      <h1>Check Console</h1>
    </>
  );
}

export default RenderCounter;
