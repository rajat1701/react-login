import "./App.css";
import Login from "../src/Login";
import Home from "../src/Home";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="App">
      {token ? (
        <Home setToken={setToken} />
      ) : (
        <Login token={token} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
