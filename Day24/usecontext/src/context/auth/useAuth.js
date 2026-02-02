import { useContext } from "react";
import authContext from "./authContext";

function useAuth() {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("useAuth Must Be Used Inside AuthProvider");
  }

  return context;
}

export default useAuth;
