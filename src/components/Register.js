import React, { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const onInputChange = event => {
    event.persist();
    setUserInfo(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form>
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
      <input
        autoComplete="new-password"
        type="password"
        placeholder="Password..."
        name="password2"
        value={userInfo.password2}
        onChange={event => onInputChange(event)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
