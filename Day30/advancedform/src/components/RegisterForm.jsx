import { useState, useEffect } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";
import FormField from "./FormField";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState(false);

  const debouncedUsername = useDebouncedValue(username);

  useEffect(() => {
    if (!touched) return;
    if (debouncedUsername.length < 6) {
      setError("Username must be at least 6 character");
    } else {
      setError("");
    }
  }, [debouncedUsername, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <FormField
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setTouched(true);
          }}
          label="username"
          error={error}
        />
        <button disabled={loading || error}>
          {loading ? "submitting..." : "Submit"}
        </button>
        {success && <p>Registration Successful</p>}
      </form>
    </>
  );
}

export default RegisterForm;
