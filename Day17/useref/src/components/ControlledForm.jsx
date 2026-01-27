import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, password });
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Type Name here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Type Password here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default ControlledForm;
