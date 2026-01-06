import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, charAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllowed, passwordGenerator]);

  return (
    <>
      <h1>Password Generator</h1>
      <input
        type="text"
        placeholder="Password"
        value={password}
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipBoard}>Copy</button>
      <div>
        <input
          type="range"
          value={length}
          min="4"
          max="20"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length} </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={number}
          onChange={() => setNumber((prev) => !prev)}
        />
        <label>Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label>Character</label>
      </div>
    </>
  );
}

export default App;
