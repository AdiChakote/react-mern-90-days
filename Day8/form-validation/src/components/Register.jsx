import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validateForm = () => {
    return {
      name: formData.name.trim().length < 3,
      email: formData.email.trim() === "",
      password: formData.password.trim() === "",
    };
  };

  const error = validateForm();

  const isFormInvalid = error.name || error.email || error.password;

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getPasswordStrength = () => {
    const length = formData.password.length;

    if (length === 0) return "";
    if (length < 4) return "Weak";
    if (length < 8) return "Medium";
    return "Strong";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setTouched({
      name: false,
      email: false,
      password: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              value={formData.name}
              name="name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && error.name && (
              <p>Name must be atleast of 3 Charactres</p>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              value={formData.email}
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && error.email && <p>Email is Required</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              value={formData.password}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && error.password && <p>Password is Required</p>}
            {formData.password && (
              <p>Password Strength: {getPasswordStrength()}</p>
            )}
          </div>
          <button type="submit" disabled={isFormInvalid}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
