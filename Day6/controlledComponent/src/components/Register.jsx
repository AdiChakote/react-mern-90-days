import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type name Here"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="Type email here"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder="Type password here"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleReset} type="button">
          Reset
        </button>
      </form>
    </>
  );
}

export default Register;
