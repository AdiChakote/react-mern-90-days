import { memo } from "react";

function Child({ onClick }) {
  console.log("Child Component Rendered");
  return (
    <>
      <button onClick={onClick}>Child Button</button>
    </>
  );
}

export default memo(Child);
