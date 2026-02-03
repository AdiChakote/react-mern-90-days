import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <>
      <h3>App is Safe</h3>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
