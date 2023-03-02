import React from "react";
import "../src/App.css";
const Home = ({ setToken }) => {
  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="home">
      Home.. Welcome, You have successfully Logged In.
      <button className="logout-btn login-btn" onClick={() => logoutHandler()}>
        Logout
      </button>
    </div>
  );
};

export default Home;
