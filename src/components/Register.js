import React, { useState } from "react";
import axios from "axios";
import server from "../utils/switchServers";

const fullWidth = {
  width: "100%",
  // border: "1px solid black"
};

const Register = ({ setLoggedIn }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });
  const [error, setError] = useState("");

  const onInputChange = event => {
    event.persist();
    setUserInfo(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const onRegister = event => {
    event.preventDefault();
    if (
      userInfo.password1 === userInfo.password2 &&
      userInfo.username &&
      userInfo.password1.length >= 8
    ) {
      axios
        .post(`${server.server}/api/registration/`, userInfo)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          setLoggedIn(true);
        })
        .catch(error => {
          setError("Username has already been taken. Please try name.");
        });
    } else {
      if (userInfo.password1.length < 8) {
        setError("Password needs to be at least 8 characters long.");
      } else {
        setError("Passwords need to be the same.");
      }
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={event => onRegister(event)}
      style={fullWidth}
    >
      <input
        autoComplete="new-username"
        type="text"
        placeholder="Username..."
        name="username"
        value={userInfo.username}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      <input
        autoComplete="new-email"
        type="email"
        placeholder="Email..."
        name="email"
        value={userInfo.email}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      <input
        autoComplete="new-password"
        type="password"
        placeholder="Password..."
        name="password1"
        value={userInfo.password1}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      {error ? <p>{error}</p> : null}
      <input
        autoComplete="new-password"
        type="password"
        placeholder="Password..."
        name="password2"
        value={userInfo.password2}
        onChange={event => onInputChange(event)}
        style={fullWidth}
      />
      <button onClick={event => onRegister(event)} style={fullWidth}>
        Register
      </button>
    </form>
  );
};

export default Register;
