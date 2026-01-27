import { useEffect, useState, useRef } from "react";

function PreviousValue() {
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>current Text: {text}</h1>
      <p>Previous Text: {prevText.current} </p>
    </>
  );
}

export default PreviousValue;
