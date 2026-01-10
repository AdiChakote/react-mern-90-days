import { useState, useEffect } from "react";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);
  const [touched, setTouched] = useState({});

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

  return {
    formData,
    touched,
    setTouched,
    handleBlur,
    handleChange,
    isFormInvalid,
    setFormData,
    error,
  };
}

export default useForm;
