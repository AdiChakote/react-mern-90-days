import "./App.css";
import Profile from "./components/Profile";
import AuthProvider from "./context/auth/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Profile />
      </AuthProvider>
    </>
  );
}

export default App;
