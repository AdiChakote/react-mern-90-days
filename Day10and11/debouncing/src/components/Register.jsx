import useForm from "./useForm";

function Register() {
  const {
    formData,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    isSuccess,
    errorMsg,
    error,
    emailStatus,
    isFormInvalid,
  } = useForm({ name: "", email: "", password: "" });

  const getPasswordStrength = () => {
    if (!formData.password) return "";
    if (formData.password.length < 4) return "Weak";
    if (formData.password.length < 8) return "Medium";
    return "Strong";
  };

  return (
    <>
      <div>
        <h1>Register</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {isSuccess && <p>Registration Successfull !</p>}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              {touched.email && error.email && <p>Email Required</p>}
              {emailStatus === "checking" && <p>Checking Email...</p>}
              {emailStatus === "taken" && <p>Email Already Exists..</p>}
              {emailStatus === "available" && <p>Email Available..</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {touched.password && error.password && <p>Password Required</p>}
              {formData.password && (
                <p>Password Strength: {getPasswordStrength()}</p>
              )}
            </div>
            <button type="submit" disabled={isSubmitting || isFormInvalid}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
