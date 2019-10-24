import React, { useState } from "react";
import axios from "axios";
import server from "../utils/switchServers";

const fullWidth = {
  width: "100%"
};

const Login = ({ setLoggedIn }) => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const onInputChange = event => {
    event.persist();
    setUserInfo(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const onLogin = event => {
    event.preventDefault();
    if (userInfo.username && userInfo.password) {
      axios
        .post(`${server.server}/api/login/`, userInfo)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          setLoggedIn(true);
        })
        .catch(error => setError("Wrong username/password. Please try again."));
    } else {
      setError("Needs more information");
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={event => onLogin(event)}
      style={fullWidth}
    >
      <input
        autoComplete="username"
        type="text"
        placeholder="Username..."
        name="username"
        value={userInfo.username}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      <input
        autoComplete="current-password"
        type="password"
        placeholder="Password..."
        name="password"
        value={userInfo.password}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      {error ? <p>{error}</p> : null}
      <button onClick={event => onLogin(event)} style={fullWidth}>
        Login
      </button>
    </form>
  );
};

export default Login;
