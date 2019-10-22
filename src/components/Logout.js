import React from "react";

const Logout = ({ setLoggedIn }) => {
  const onLogout = () => {
    localStorage.removeItem("key");
    setLoggedIn(false);
  };
  return <button onClick={onLogout}>Log Out</button>;
};

export default Logout;
