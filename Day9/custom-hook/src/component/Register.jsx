import useForm from "./useForm";

function Register() {
  const {
    formData,
    touched,
    setTouched,
    handleChange,
    handleBlur,
    setFormData,
    isFormInvalid,
    error,
  } = useForm({ name: "", email: "", password: "" });

  const getPasswordStrength = () => {
    if (formData.password.length === "") return "";
    if (formData.password.length < 4) return "Weak";
    if (formData.password.length < 8) return "Medium";
    return "Strong";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid) {
      console.log("Form Invalid");
      return;
    }
    console.log("Form Submitted, ", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setTouched({});
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && error.name && <p>Name must be of 3 Character</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && error.email && <p>Email Required</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && error.password && <p>Password Required</p>}
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
