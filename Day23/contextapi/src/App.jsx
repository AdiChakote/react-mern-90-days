import "./App.css";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ThemeButton from "./component/ThemeButton";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeButton />
    </ThemeContextProvider>
  );
}

export default App;
