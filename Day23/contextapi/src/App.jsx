import "./App.css";
import ThemeContextProvider from "./context/ThemeContexrProvider";
import ThemeButton from "./component/ThemeButton";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeButton />
    </ThemeContextProvider>
  );
}

export default App;
