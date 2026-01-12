import { useState, useEffect } from "react";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    return {
      name: formData.name.trim().length < 3,
      email: formData.email.trim() === "",
      password: formData.password.trim() === "",
    };
  };

  const error = validateForm();

  const isFormInvalid = error.name || error.email || error.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSuccess(false);
    if (isFormInvalid) return;
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Submitted, ", formData);
      setIsSuccess(true);
      setFormData(initialValue);
      setTouched({});
    } catch (err) {
      setErrorMsg("Something Went Wrong !");
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
  useEffect(() => {
    Object.keys(error).forEach((field) => {
      if (!error[field]) {
        setTouched((prev) => ({
          ...prev,
          [field]: false,
        }));
      }
    });
  }, [formData]);
  */
  return {
    formData,
    touched,
    error,
    isFormInvalid,
    isSubmitting,
    isSuccess,
    errorMsg,
    handleBlur,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
