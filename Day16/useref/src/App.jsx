import "./App.css";
import AutoFocusInput from "./components/AutoFocusInput";
import RenderCounter from "./components/RenderCounter";
import PreviousValue from "./components/PreviousValue";

function App() {
  return (
    <>
      <AutoFocusInput />
      <RenderCounter />
      <PreviousValue />
    </>
  );
}

export default App;
