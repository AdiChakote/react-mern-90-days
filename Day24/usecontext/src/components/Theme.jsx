import useTheme from "../context/theme/useTheme";

function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1>Current Theme:- {theme} </h1>
      <button onClick={toggleTheme}>
        {" "}
        {theme === "light" ? "Dark" : "Light"}{" "}
      </button>
    </>
  );
}

export default Theme;
