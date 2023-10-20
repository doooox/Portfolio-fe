import { useLocation } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
