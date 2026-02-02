import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme Must Be Used Inside ThemeProvider");
  }

  return context;
}

export default useTheme;
