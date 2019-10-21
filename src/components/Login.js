import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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
        .post("https://lambda-mud-test.herokuapp.com/api/login/", userInfo)
        .then(res => console.log(res))
        .catch(error => setError("Wrong username/password. Please try again."));
    } else {
      setError("Needs more information");
    }
  };

  return (
    <form autoComplete="off" onSubmit={event => onLogin(event)}>
      <input
        autoComplete="username"
        type="text"
        placeholder="Username..."
        name="username"
        value={userInfo.username}
        onChange={event => onInputChange(event)}
      />
      <input
        autoComplete="current-password"
        type="password"
        placeholder="Password..."
        name="password"
        value={userInfo.password}
        onChange={event => onInputChange(event)}
      />
      {error ? <p>{error}</p> : null}
      <button onClick={event => onLogin(event)}>Login</button>
    </form>
  );
};

export default Login;
