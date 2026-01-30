import { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUserName } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName({ name, password });
    setName("");
    setPassword("");
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
}

export default Login;
