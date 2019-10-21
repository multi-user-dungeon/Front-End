import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const onInputChange = event => {
    event.persist();
    setUserInfo(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form autoComplete="off">
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
      <button>Login</button>
    </form>
  );
};

export default Login;
