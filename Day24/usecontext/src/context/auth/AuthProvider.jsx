import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
