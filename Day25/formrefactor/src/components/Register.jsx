import { useState } from "react";
import FormField from "./FormField";
import { validateEmail, validatePasword } from "./validation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newError = {};
    newError.email = validateEmail(email);
    newError.password = validatePasword(password);
    setErrors(newError);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <FormField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <FormField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Register;
