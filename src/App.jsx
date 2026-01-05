import Toggle from "./components/Toggle";
import NameInput from "./components/NameInput";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <NameInput />
      <div>
        <Toggle />
      </div>
    </>
  );
}

export default App;
