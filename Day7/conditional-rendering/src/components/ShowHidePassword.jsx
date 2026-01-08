import { useState } from "react";

function ShowHidePassword() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      formData.name.length < 3 ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setIsSuccess(false);
      return;
    }
    console.log("Form Submitted", formData);
    setIsSuccess(true);
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

  return (
    <>
      <h1>Conditional Rendering Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {submitted && !isSuccess && formData.name.length < 3 && (
            <p>name length must be more than 3 characters</p>
          )}
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {submitted && !isSuccess && formData.email === "" && (
            <p>email is compulsary</p>
          )}
        </div>
        <div>
          <label>passsword</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide Password" : "Show Password"}
        </button>
      </div>
      <div>{isSuccess && <p>Form Submitted Successfully !</p>}</div>
    </>
  );
}

export default ShowHidePassword;
