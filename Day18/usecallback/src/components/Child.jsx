import React from "react";

const Child = React.memo(function Child({ onChildClick }) {
  console.log("Child Rendered");

  return (
    <>
      <button onClick={onChildClick}>Child Button</button>
    </>
  );
});

export default Child;
