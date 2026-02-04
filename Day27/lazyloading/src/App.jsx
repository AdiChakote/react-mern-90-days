import { lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Home />
        <Dashboard />
      </Suspense>
    </>
  );
}

export default App;
