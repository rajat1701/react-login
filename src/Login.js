import React, { useState } from "react";
import "../src/App.css";
import axios from "axios";
const Login = ({ token, setToken }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setPassword("");
    setUsername("");
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.error);
      });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="heading">Yms</div>
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {error && <small>{error}</small>}
        <div className="active-btn">
          <button className="inline-btn login-btn" onClick={loginHandler}>
            Login
          </button>
          <button className="inline-btn cancel-btn">Cancel</button>
        </div>
        OR
        <button className="inactive-btn facebook-btn">
          Login with Facebook
        </button>
        <button className="inactive-btn google-btn">Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
