import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailStatus, setEmailStatus] = useState("idle");

  const debouncedName = useDebounce(formData.name, 500);
  const debounceEmail = useDebounce(formData.email, 500);

  const checkEmailAvailability = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "test@gmail.com") {
          resolve(false);
        } else {
          resolve(true);
        }
      }, 800);
    });
  };

  useEffect(() => {
    if (!debounceEmail || error.email) return;

    let isActive = true;

    const checkEmail = async () => {
      setEmailStatus("checking");
      const available = await checkEmailAvailability(debounceEmail);
      if (!isActive) return;
      setEmailStatus(available ? "available" : "taken");
    };
    checkEmail();

    return () => {
      isActive = false;
    };
  }, [debounceEmail]);

  const validateForm = () => {
    return {
      name: formData.name.trim().length < 3,
      email: formData.email.trim() === "",
      password: formData.password.trim() === "",
    };
  };

  const error = validateForm();

  const isFormInvalid =
    error.name ||
    error.email ||
    error.password ||
    emailStatus === "taken" ||
    emailStatus === "checking";

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
      setEmailStatus("idle");
    } catch (err) {
      setErrorMsg("Something Went Wrong !");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    emailStatus,
  };
}

export default useForm;
