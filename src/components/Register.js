import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
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
        .post(
          "https://lambda-mud-test.herokuapp.com/api/registration/",
          userInfo
        )
        .then(res => console.log(res))
        .catch(error =>
          setError("Username has already been taken. Please try name.")
        );
    } else {
      if (userInfo.password1.length < 8) {
        setError("Password needs to be at least 8 characters long.");
      } else {
        setError("Passwords need to be the same.");
      }
    }
  };

  return (
    <form autoComplete="off" onSubmit={event => onRegister(event)}>
      <input
        autoComplete="new-username"
        type="text"
        placeholder="Username..."
        name="username"
        value={userInfo.username}
        onChange={event => onInputChange(event)}
      />
      <input
        autoComplete="new-password"
        type="password"
        placeholder="Password..."
        name="password1"
        value={userInfo.password1}
        onChange={event => onInputChange(event)}
      />
      {error ? <p>{error}</p> : null}
      <input
        autoComplete="new-password"
        type="password"
        placeholder="Password..."
        name="password2"
        value={userInfo.password2}
        onChange={event => onInputChange(event)}
      />
      <button onClick={event => onRegister(event)}>Register</button>
    </form>
  );
};

export default Register;