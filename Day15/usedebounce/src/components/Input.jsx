import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

function Input() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  useEffect(() => {
    if (debouncedText) console.log("user stopped typing", debouncedText);
  }, [debouncedText]);

  return (
    <>
      <h1>Debounce Example</h1>
      <input
        type="text"
        value={text}
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
      <p>what you typed: {text} </p>
      <p>debounced value: {debouncedText} </p>
    </>
  );
}

export default Input;
