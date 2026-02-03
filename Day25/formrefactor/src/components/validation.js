export function validateEmail(eamil) {
  if (!eamil.includes("@")) {
    return "Invalid Email";
  }

  return "";
}

export function validatePasword(password) {
  if (password.length < 6) {
    return "Password must be atleast 6 character";
  }
  return "";
}
