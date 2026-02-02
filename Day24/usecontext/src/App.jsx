import "./App.css";
import Profile from "./components/Profile";
import Theme from "./components/Theme";
import AuthProvider from "./context/auth/AuthProvider";
import ThemeProvider from "./context/theme/ThemeProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Profile />
          <Theme />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
