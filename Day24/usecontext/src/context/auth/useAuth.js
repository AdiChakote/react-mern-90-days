import { useContext } from "react";
import AuthContext from "./AuthContext";

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth Must Be Used Inside AuthProvider");
  }

  return context;
}

export default useAuth;
