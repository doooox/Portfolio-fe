import { useLocation } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes";
import { useEffect } from "react";
import UserProvider from "./provider/userProvider";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <UserProvider>
      <main className="App">
        <AppRouter />
      </main>
    </UserProvider>
  );
}

export default App;
