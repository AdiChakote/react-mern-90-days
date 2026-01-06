import { useState } from "react";

function NameInput() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Type Here</h1>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You Typed: {text}</p>
      <button onClick={() => setText("")} disabled={!text}>
        Clear
      </button>
    </>
  );
}

export default NameInput;
